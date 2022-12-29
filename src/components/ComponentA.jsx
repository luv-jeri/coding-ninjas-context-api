import React from 'react';
import { useContextOne } from '../contextOne';
import { useContextTwo } from '../contextTwo';

function ComponentA() {
  const { two } = useContextTwo();
  const { one } = useContextOne();

  return (
    <div className='component'>
      <h1>Component </h1>
      <p>One: {one}</p>
      <p>Two: {two}</p>
    </div>
  );
}

export default ComponentA;
