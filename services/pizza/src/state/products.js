import peperoni from '../images/peperoni_fresh.jpeg';
import peperoniTomato from '../images/peperoni_fresh_tomato.jpeg';
import hawaii from '../images/hawaii.jpg';
import fourSeasons from '../images/four_seasons.jpg';
import hamAndCheese from '../images/ham_and_cheese.jpg';
import fiesta from '../images/fiesta.jpg';
import cheeseChicken from '../images/cheese_chicken.jpg';
import cheesy from '../images/cheesy.jpg';

export const products = [{
  id: 1,
  title: 'Pepperoni fresh',
  image: {
    src: peperoni,
    width: 584,
    height: 584
  },
  price: 10.99,
  descr: 'Spicy pepperoni, extra mozzarella, sweet pepper, tomato sauce'
}, {
  id: 2,
  title: 'Pepperoni fresh with tomatoes',
  image: {
    src: peperoniTomato,
    width: 584,
    height: 584
  },
  price: 10.99,
  descr: 'Spicy pepperoni, extra mozzarella, tomatoes, tomato sauce'
},
{
  id: 3,
  title: 'Hawaii',
  image: {
    src: hawaii,
    width: 584,
    height: 584
  },
  price: 9.99,
  descr: 'Chicken, tomato sauce, mozzarella, pineapples'
},
{
  id: 4,
  title: 'Four seasons',
  image: {
    src: fourSeasons,
    width: 584,
    height: 584
  },
  price: 10.99,
  descr: 'Increased portion of mozzarella, ham, spicy pepperoni, cheese cubes, tomatoes, mushrooms, tomato sauce, Italian herbs'
},
{
  id: 5,
  title: 'Ham and cheese',
  image: {
    src: hamAndCheese,
    width: 584,
    height: 584
  },
  price: 12.99,
  descr: 'Ham, extra mozzarella, cream sauce'
},
{
  id: 6,
  title: 'Fiesta',
  image: {
    src: fiesta,
    width: 584,
    height: 584
  },
  price: 11.99,
  descr: 'Bacon, cheddar and parmesan cheeses, mozzarella, cherry tomatoes, onion, garlic, cream sauce, Italian herbs'
},
{
  id: 7,
  title: 'Cheesy chicken',
  image: {
    src: cheeseChicken,
    width: 584,
    height: 584
  },
  price: 10.99,
  descr: 'Chicken, cheese sauce, mozzarella, tomatoes'
},
{
  id: 8,
  title: 'Cheesy',
  image: {
    src: cheesy,
    width: 584,
    height: 584
  },
  price: 11.99,
  descr: 'Increased portion of mozzarella, cheddar and Parmesan cheese mix, blue cheese, cream sauce'
}];
