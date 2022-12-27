import React from 'react';
import styles from '../styles/ItemCard.module.css';

function ItemCard({ id, price, name }) {
  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>${price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton}>Add</button>
        <button className={styles.itemButton}>Remove</button>
      </div>
    </div>
  );
}

export default ItemCard;
