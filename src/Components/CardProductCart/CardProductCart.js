//React
import React from 'react';
//Context
import { GlobalContext } from '../../Contexts/GlobalState';
//Styles
import styles from './CardProductCart.module.scss';
//Images
import iconTrash from '../../Assets/icon-trash.svg';
//Components
import ButtonQtd from '../ButtonQtd/ButtonQtd';

const CardProductCart = ({ data }) => {
  //Context
  const { removeToCart } = React.useContext(GlobalContext);
  //Component
  const [countQtd, setCountQtd] = React.useState(0);

  function modQtd(value) {
    setCountQtd(countQtd + value);
  }

  return (
    <li className={styles.containerProductCart}>
      <div className={styles.picture}>
        <img
          src={data.avatar.replace('food', `${data.name}?lock=12`)}
          alt={data.name}
        />
      </div>
      <div className={styles.infos}>
        <div className={styles.titleRemove}>
          <p>{data.name}</p>
          <button
            className={styles.remove}
            onClick={() => {
              removeToCart(data);
            }}
          >
            <img src={iconTrash} alt="Icon Trash" />
          </button>
        </div>
        <div className={styles.priceQtd}>
          <div className={styles.descriptionPrice}>
            <div className={styles.description}>
              <p className={styles.dcpt}>{data.desciption}</p>
              <p className={styles.price}>
                <span>$</span>
                {data.price}
              </p>
            </div>
          </div>
          <div className={styles.qtd}>
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
        </div>
      </div>
    </li>
  );
};

export default CardProductCart;
