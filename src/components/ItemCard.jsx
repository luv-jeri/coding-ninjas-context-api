import React from 'react';
import styles from '../styles/ItemCard.module.css';
import { useCart } from '../context';

function ItemCard({ id, price, name }) {
  const { handleAdd, handleRemove } = useCart();

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>${price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button
          className={styles.itemButton}
          onClick={() => {
            handleAdd({
              id,
              price,
              name,
            });
          }}
        >
          Add
        </button>
        <button
          className={styles.itemButton}
          onClick={() => {
            handleRemove(id);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
