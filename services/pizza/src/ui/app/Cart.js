import React, {useContext} from 'react';
import {Context} from '../../state/Context';
import {cartItemAmount, cartItemRemove} from '../../state/actions';
import {Tables} from 'reacy-ui';
import SpaButton from '../kit/buttons/SpaButton';
import Amount from './Amount';
import './Cart.scss';

const columns = [{
  id: 'image',
  width: '80px',
  template: ({image, title}) => <img className="cart__item-product-image" {...image} alt={title}/>
}, {
  id: 'title',
  template: ({title}) => <span className="cart__item-product-name">{title}</span>
}, {
  id: 'amount',
  width: '120px',
  caption: 'Amount'
}, {
  id: 'price',
  width: '80px',
  align: 'right',
  caption: 'Price',
  template: ({price}) => <span className="cart__item-product-price">{price}</span>
}, {
  id: 'total',
  width: '80px',
  align: 'right',
  caption: 'Total',
  template: ({total}) => <span className="cart__item-product-total">{total}</span>
}];

const Cart = () => {
  const {state, dispatch} = useContext(Context);
  const {cart, products} = state;
  if (!cart.length) {
    return <div heading="Your cart is empty" text="Looks like you didn't add any items to your shopping cart."/>
  }
  columns
    .find(column => column.id === 'amount')
    .template = ({amount, id}) => <Amount amount={amount} onChange={amount => {
      if (amount > 0) {
        cartItemAmount({dispatch, id, amount});
      } else {
        cartItemRemove({dispatch, id});
      }
    }}/>;
  let summaryTotal = 0;
  return (
    <div className="cart">
      <h1>Cart</h1>
      <Tables.Table
        columns={columns}
        rows={[...cart.map(item => {
          const product = products.find(product => product.id === item.id);
          const total = product.price * item.amount;
          summaryTotal += total;
          return {...item, ...product, total};
        })]}
        footer={[{
          id: 'summaryText',
          colspan: 3,
          summaryText: 'Total'
        }, {
          id: 'summaryTotal',
          summaryTotal
        }]}
      />
      <div className="cart__footer">
        <SpaButton href="/checkout" mods={['primary', 'xl', 'shadow']}>Checkout</SpaButton>
      </div>
    </div>
  )
};

export default Cart;
