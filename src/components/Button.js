import React from 'react';
import { useContextOne } from '../contextOne';
import { useContextTwo } from '../contextTwo';

function Button() {
  const {  handleUpdateTwo} = useContextTwo();
  const { handleUpdateOne } = useContextOne();
  return (
    <button onClick={handleUpdateTwo}>
      Button
    </button>
  );
}

export default Button;
