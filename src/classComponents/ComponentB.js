import React, { Component } from 'react';
import { context } from '../context';

class ComponentB extends Component {
  render() {
    return <div className='component'>ComponentB - {this.context.age}</div>;
  }
}

ComponentB.contextType = context;

export default ComponentB;
