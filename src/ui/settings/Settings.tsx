import React, { Component, ReactNode } from 'react';
import Form, { IFieldProps } from '../input/Form';
import styled from 'styled-components';

interface ISettingsProps {
  data: {
    [x: string]: any
  }
}

/**
 * Component for displaying form.
 */
export default class Settings extends Component<ISettingsProps> {
  protected fields: IFieldProps[] = [
    { name: 'compact', caption: 'Compact', type: 'switch' },
    { name: 'stacked', caption: 'stacked', type: 'switch' }
  ];

  constructor(props: ISettingsProps) {
    super(props);
    this.fields.map(field => field.value = this.props.data[field.name])
  }

  /**
   * */
  render(): ReactNode {
    return (
      <Wrapper>
        <Form fields={this.fields} data={this.props.data}/>
      </Wrapper>
    )
  }
};

const Wrapper = styled.div`
  padding: 10px;
`;
