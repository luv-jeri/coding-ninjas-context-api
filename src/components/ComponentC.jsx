import React from 'react';
import { useContext } from 'react';
import { context } from '../context';

function ComponentC() {
  const value = useContext(context);
  return <div className='component'>ComponentC - {value.name} {value.age}</div>;
}

export default ComponentC;
