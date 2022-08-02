//React
import React from 'react';
//Styles
import styles from './Search.module.scss';
//Images
import iconSearch from '../../Assets/icon-search.svg';

const Search = () => {
  return (
    <form className={styles.form}>
      <input type="text" placeholder="O que você procura?" />
      <button>
        <img src={iconSearch} alt="Icon Search" />
      </button>
    </form>
  );
};

export default Search;
