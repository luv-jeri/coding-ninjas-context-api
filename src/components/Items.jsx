import React from 'react';
import styles from '../styles/Item.module.css';
import { useContext } from 'react';
import { context } from '../context';

function Items() {
  const { total, setTotal } = useContext(context);
  return (
    <div className={styles.wrapper}>
      <div className={styles.itemCard}>
        <div className={styles.itemName}>Item Name</div>
        <div className={styles.itemPrice}>$100</div>
        <div className={styles.itemButtonsWrapper}>
          <button
            className={styles.itemButton}
            onClick={() => {
              setTotal(100 + total);
            }}
          >
            Add
          </button>
          <button
            className={styles.itemButton}
            onClick={() => {
              setTotal(total - 100);
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default Items;
