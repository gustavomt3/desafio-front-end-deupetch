//React
import React from 'react';
//Styles
import styles from './Loading.module.scss';
//Context
import { GlobalContext } from '../../Contexts/GlobalState';

const Loading = () => {
  const { loading } = React.useContext(GlobalContext);

  return (
    <>
      {loading && (
        <div className={styles.loading}>
          <p>Loading...</p>
        </div>
      )}
    </>
  );
};

export default Loading;
