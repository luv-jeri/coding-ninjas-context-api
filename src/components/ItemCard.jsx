import React from 'react';
import styles from '../styles/ItemCard.module.css';
import { useItemContext } from '../context/ItemContext';

function ItemCard({ id, price, name }) {
  const { add, remove } = useItemContext();

  const handleAdd = () => {
    add(price);
  };

  const handleRemove = () => {
    remove(price);
  };

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>${price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={handleAdd}>
          Add
        </button>
        <button className={styles.itemButton} onClick={handleRemove}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
