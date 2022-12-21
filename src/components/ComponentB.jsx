import React from 'react';
import { context } from '../context';

function ComponentB() {
  return (
    <context.Consumer>
      {(value) => <div className='component'>ComponentB - {value.age}</div>}
    </context.Consumer>
  );
}

export default ComponentB;
