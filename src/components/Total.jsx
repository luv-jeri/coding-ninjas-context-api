import React from 'react';
import styles from '../styles/Total.module.css';
import { useContext } from 'react';
import { context } from '../context';

function Total() {
  const { total } = useContext(context);
  return (
    <div className={styles.container}>
      <h1>Total - {total}</h1>
      <h1> Item - 0 </h1>
    </div>
  );
}

export default Total;
