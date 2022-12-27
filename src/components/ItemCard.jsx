import React from 'react';
import styles from '../styles/ItemCard.module.css';
import { useCon } from '../context';

function ItemCard({ id, price, name }) {
  const { handleAdd, handleRemove } = useCon();

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>${price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button
          className={styles.itemButton}
          onClick={() => {
            handleAdd(price);
          }}
        >
          Add
        </button>
        <button
          className={styles.itemButton}
          onClick={() => {
            handleRemove(price);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
