import React from 'react';
import styles from '../styles/Total.module.css';
import { useCart } from '../context';

function Total() {
  const { total, items, times, toggle } = useCart();

  return (
    <div className={styles.container}>
      <h1 onClick={toggle}>Total - {total}</h1>
      <h1>
        Item - {items} {times}
      </h1>
    </div>
  );
}

export default Total;
