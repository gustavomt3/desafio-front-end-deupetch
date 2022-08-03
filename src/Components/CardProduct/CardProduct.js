//React
import React from 'react';
//Context
import { GlobalContext } from '../../Contexts/GlobalState';
//Styles
import styles from './CardProduct.module.scss';
//Components
import ButtonQtd from '../ButtonQtd/ButtonQtd';
//Images
import iconCart from '../../Assets/icon-cart.svg';

const CardProduct = ({ data }) => {
  //Context
  const { addToCart } = React.useContext(GlobalContext);
  //Component
  const [countQtd, setCountQtd] = React.useState(0);

  function modQtd(value) {
    setCountQtd(countQtd + value);
  }

  return (
    <li className={styles.containerCard}>
      <div className={styles.cardPhoto}>
        <img
          src={data.avatar.replace('food', `${data.name}?lock=12`)}
          alt={data.name}
        />
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
            <ButtonQtd
              onClick={() => {
                modQtd(-1);
              }}
              disabled={countQtd === 0 ? 'disabled' : ''}
            >
              -
            </ButtonQtd>
            <span>{countQtd}</span>
            <ButtonQtd
              onClick={() => {
                modQtd(+1);
              }}
              disabled={countQtd === 99 ? 'disabled' : ''}
            >
              +
            </ButtonQtd>
          </div>
          <div className={styles.shop}>
            <button
              className={styles.buttonCart}
              onClick={() => {
                addToCart(data);
              }}
            >
              <img src={iconCart} alt="Icon Cart" />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CardProduct;
