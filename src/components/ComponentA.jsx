import React from 'react';

import { useCount } from '../countContext';

function ComponentA() {
  const { name } = useCount();
  console.log("ComponentA rendered")
  return (
    <div className='component'>
      ComponentA  Using Name - {name}
    </div>
  );
}

export default ComponentA;
