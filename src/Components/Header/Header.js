//React
import React from 'react';
//Styles
import styles from './Header.module.scss';
//Images
import Logo from '../../Assets/logo-deupetch.jpg';
//Components
import Search from '../Search/Search';
import Cart from '../Cart/Cart';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.containerGeral}>
        <div className={styles.name}>
          <img src={Logo} alt="Logo DeuPetch" />
          <h1>Loja DeuPetch</h1>
        </div>
        <div className={styles.search}>
          <Search />
        </div>
        <div className={styles.cart}>
          <Cart />
        </div>
      </div>
    </header>
  );
};

export default Header;
