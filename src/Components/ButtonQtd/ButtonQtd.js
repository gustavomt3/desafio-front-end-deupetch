//React
import React from 'react';
//Styles
import styles from './ButtonQtd.module.scss';

const ButtonQtd = ({ children, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};

export default ButtonQtd;
