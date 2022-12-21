import React from 'react'
import { useContext } from 'react';
import { context } from '../context';

function ComponentB() {
  const value = useContext(context);
  return <div className='component'>ComponentB - {value.age}</div>;
}

export default ComponentB;