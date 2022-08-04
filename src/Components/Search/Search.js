//React
import React from 'react';
//Context
import { GlobalContext } from '../../Contexts/GlobalState';
//Styles
import styles from './Search.module.scss';
//Images
import iconSearch from '../../Assets/icon-search.svg';

const Search = () => {
  //Context
  const { setText } = React.useContext(GlobalContext);

  return (
    <div className={styles.form}>
      <input
        type="text"
        placeholder="O que você procura?"
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <button>
        <img src={iconSearch} alt="Icon Search" />
      </button>
    </div>
  );
};

export default Search;
