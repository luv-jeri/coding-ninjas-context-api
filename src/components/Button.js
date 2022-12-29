import React from 'react';
import { useCount } from '../countContext';

function Button() {
  const { handleIncrement } = useCount();
  return (
    <button onClick={handleIncrement}>
      Button
    </button>
  );
}

export default Button;
