//React
import React from 'react';
//Context
import { GlobalContext } from '../../Contexts/GlobalState';
//Styles
import styles from './Cart.module.scss';
//Images
import iconCart from '../../Assets/icon-cart.svg';
//Components
import CardProductCart from '../CardProductCart/CardProductCart';

const Cart = () => {
  //Context
  const { state } = React.useContext(GlobalContext);
  //Components
  const [activeCart, setActiveCart] = React.useState(false);
  const actveClass = activeCart ? styles.active : '';

  return (
    <>
      <button
        className={styles.buttonCart}
        onClick={() => setActiveCart(!activeCart)}
      >
        <img src={iconCart} alt="Icon Cart" />
        <span>{state.products.length}</span>
      </button>
      <div className={`${actveClass} ${styles.containerGeralCart}`}>
        <button
          onClick={() => setActiveCart(!activeCart)}
          className={styles.buttonClosed}
        >
          x
        </button>
        <ul className={styles.containerCart}>
          {state.products &&
            state.products.map((data) => {
              return <CardProductCart key={data.id} data={data} />;
            })}
        </ul>
      </div>
    </>
  );
};

export default Cart;
