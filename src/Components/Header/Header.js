//React
import React from 'react';
//Styles
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.containerGeral}>
        <div className={styles.nameapp}>
          <h1>Bob's Burguer Cards</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
