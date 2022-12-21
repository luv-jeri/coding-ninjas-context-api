import React from 'react';
import { useContext } from 'react';
import { context } from '../context';

function ComponentA() {
  const value = useContext(context);
  console.log(value);
  return <div className='component'>ComponentA - {value.name}</div>;
}

export default ComponentA;
