//React
import React from 'react';
//Styles
import styles from './Main.module.scss';
//Context
import { GlobalContext } from '../../Contexts/GlobalState';
//Components
import Loading from '../Loading/Loading';
import CardProduct from '../CardProduct/CardProduct';

const Main = () => {
  //Context
  const { loading, data } = React.useContext(GlobalContext);

  return (
    <main className={styles.containerMain}>
      <Loading />
      <ul className={styles.containerCards}>
        {!loading &&
          data &&
          data.map((data) => {
            return <CardProduct key={data.id} data={data} />;
          })}
      </ul>
    </main>
  );
};

export default Main;
