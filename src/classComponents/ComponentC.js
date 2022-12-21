import React, { Component } from 'react';
import { context } from '../context';

class ComponentC extends Component {
  static contextType = context;

  render() {
    return <div className='component'>ComponentC -{this.context.age}</div>;
  }
}

export default ComponentC;
