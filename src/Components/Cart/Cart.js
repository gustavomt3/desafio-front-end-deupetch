//React
import React from 'react';
//Styles
import styles from './Cart.module.scss';
//Images
import iconCart from '../../Assets/icon-cart.svg';

const Cart = () => {
  return (
    <button className={styles.buttonCart}>
      <img src={iconCart} alt="Icon Cart" />
    </button>
  );
};

export default Cart;
