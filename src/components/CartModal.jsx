import React from 'react';
import { useCart } from '../context';

import styles from '../styles/CartModal.module.css';

function CartModal({ toggle }) {
  const { cart, total, clear } = useCart();
  return (
    <div className={styles.cartModal}>
      <div className={styles.closeButton} onClick={toggle}>
        Close
      </div>
      <div className={styles.clearButton} onClick={clear}>
        Clear
      </div>
      <div className={styles.itemContainer}>
        {cart.map((item) => {
          return (
            <div className={styles.cartCard}>
              <h1>{item.name}</h1>
              <h2>{item.price}</h2>

              <h3>X {item.quantity}</h3>
            </div>
          );
        })}
      </div>
      <div className={styles.total}>
        <div className={styles.totalText}>Total</div>
        <div className={styles.totalPrice}>${total}</div>
      </div>
    </div>
  );
}

export default CartModal;
