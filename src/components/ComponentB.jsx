import React from 'react';

import { useCount } from '../countContext';

function ComponentB() {
  const { count } = useCount();
  console.log('ComponentB rendered');
  return (
    <div className='component'>
      ComponentB using Count - {count}
    </div>
  );
}

export default ComponentB;
