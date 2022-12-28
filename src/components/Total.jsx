import React from 'react';
import styles from '../styles/Total.module.css';
import { useContext } from 'react';
import TotalContext from '../totalContext';
import ItemContext from '../itemContext';

function Total() {
  const value = useContext(TotalContext);
  const { item, setItem } =
    useContext(ItemContext);

  return (
    <div className={styles.container}>
      <h1>Total - {value.total}</h1>
      <h1> Item - {item} </h1>
    </div>
  );
}

export default Total;
