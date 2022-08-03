//React
import React from 'react';
//Styles
import styles from './CardProduct.module.scss';
//Components
import ButtonQtd from '../ButtonQtd/ButtonQtd';
//Images
import iconCart from '../../Assets/icon-cart.svg';

const CardProduct = ({ data }) => {
  return (
    <li className={styles.containerCard}>
      <div className={styles.cardPhoto}>
        <img src={data.avatar.replace('food', data.name)} alt={data.name} />
      </div>
      <div className={styles.name}>
        <h1>{data.name}</h1>
      </div>
      <div className={styles.description}>
        <h2>{data.desciption}</h2>
      </div>
      <div className={styles.priceCount}>
        <div className={styles.price}>
          <span>$</span> <p>{data.price}</p>
        </div>
        <div className={styles.countShop}>
          <div className={styles.count}>
            <ButtonQtd>-</ButtonQtd>
            <span>0</span>
            <ButtonQtd>+</ButtonQtd>
          </div>
          <div className={styles.shop}>
            <button className={styles.buttonCart}>
              <img src={iconCart} alt="Icon Cart" />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CardProduct;
