import React from 'react';
import styles from '../styles/CartCard.module.css';

function CartCard({ id, price, name }) {
  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>${price}</div>
    </div>
  );
}

export default CartCard;
