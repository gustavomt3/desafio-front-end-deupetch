//React
import React, { useEffect } from 'react';
//Context
import { GlobalContext } from '../../Contexts/GlobalState';
//Styles
import styles from './CardProductCart.module.scss';
//Images
import iconTrash from '../../Assets/icon-trash.svg';
//Components
import ButtonQtd from '../ButtonQtd/ButtonQtd';

const CardProductCart = ({ product }) => {
  //Context
  const { removeToCart, modToCart } = React.useContext(GlobalContext);
  //Component
  const [countQtd, setCountQtd] = React.useState(product.qtd);

  useEffect(() => {
    setCountQtd(product.qtd);
  }, [product.qtd]);

  function modQtd(value) {
    setCountQtd(countQtd + value);
  }

  return (
    <li className={styles.containerProductCart}>
      <div className={styles.picture}>
        <img
          src={product.avatar.replace('food', `${product.name}?lock=12`)}
          alt={product.name}
        />
      </div>
      <div className={styles.infos}>
        <div className={styles.titleRemove}>
          <p>{product.name}</p>
          <button
            className={styles.remove}
            onClick={() => {
              removeToCart(product);
            }}
          >
            <img src={iconTrash} alt="Icon Trash" />
          </button>
        </div>
        <div className={styles.priceQtd}>
          <div className={styles.descriptionPrice}>
            <div className={styles.description}>
              <p className={styles.dcpt}>{product.description}</p>
              <p className={styles.price}>
                <span>$</span>
                {product.price}
              </p>
            </div>
          </div>
          <div className={styles.qtd}>
            <ButtonQtd
              onClick={() => {
                modQtd(-1);
                modToCart(product, -1);
              }}
              disabled={countQtd === 1 ? 'disabled' : ''}
            >
              -
            </ButtonQtd>
            <span>{countQtd}</span>
            <ButtonQtd
              onClick={() => {
                modQtd(1);
                modToCart(product, +1);
              }}
              disabled={countQtd === 99 ? 'disabled' : ''}
            >
              +
            </ButtonQtd>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CardProductCart;
