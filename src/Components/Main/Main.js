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
  const { loading, setLoading } = React.useContext(GlobalContext);
  //Component
  const [data, setData] = React.useState([]);

  //Fetch [Puxa os produtos da API]
  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://62d742f351e6e8f06f1a83da.mockapi.io/api/produtos`,
      );
      const data = await response.json();
      //Const Nova Array
      const newData = new Set();
      //Filtra a Array retirando elementos repetidos por nome
      const filterData = data.filter((data) => {
        const duplicatedData = newData.has(data.name);
        newData.add(data.name);
        return !duplicatedData;
      });
      //Seta a Array filtrada
      setData(filterData);
    } catch (err) {
      console.log('error', err);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

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
