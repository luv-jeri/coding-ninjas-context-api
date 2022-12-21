import React, { Component } from 'react';
import { context } from '../context';

class ComponentA extends Component {
  render() {
    return (
      <context.Consumer>
        {(value) => <div className='component'>ComponentA - {value.name}</div>}
      </context.Consumer>
    );
  }
}

export default ComponentA;
