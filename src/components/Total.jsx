import React from 'react';
import styles from '../styles/Total.module.css';
import { useCon } from '../context';

function Total() {
  const { total, items, reset, times } = useCon();

  return (
    <div className={styles.container}>
      <h1>Total - {total}</h1>
      <h1>
        Item - {items} {times}
      </h1>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Total;
