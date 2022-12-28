import React from 'react';
import styles from '../styles/Total.module.css';
import { useContext } from 'react';
import TotalContext from '../totalContext';
import ItemContext from '../itemContext';

function Total() {
  const value = useContext(TotalContext);
 

  return (
    <div className={styles.container}>
      <h1>Total - {value.total}</h1>
      <h1> Item - {value.item} </h1>
    </div>
  );
}

export default Total;
