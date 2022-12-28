import React from 'react';
import styles from '../styles/ItemCard.module.css';
import { useContext } from 'react';
import TotalContext from '../totalContext';
import ItemContext from '../itemContext';

function ItemCard(props) {
  const { price, name } = props;
  const value = useContext(TotalContext);
  const { item, setItem } =
    useContext(ItemContext);

  const { total, setTotal } = value;

  const handleAdd = () => {
    setTotal(total + price);
    setItem((prevState) => {
      return prevState + 1;
    });
  };

  const handleRemove = () => {
    const newResult = total - price;
    setTotal(parseFloat(newResult.toFixed(2)));
    setItem(item - 1);
  };

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>
        {name}
      </div>
      <div className={styles.itemPrice}>
        ${price}
      </div>
      <div className={styles.itemButtonsWrapper}>
        <button
          className={styles.itemButton}
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          className={styles.itemButton}
          onClick={handleRemove}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
