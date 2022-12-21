import React from 'react';
import { useContext } from 'react';
import { context } from '../App';

function ComponentA() {
  const value = useContext(context);
  console.log(value);
  return <div className='component'>ComponentA - {value.name}</div>;
}

export default ComponentA;
