//React
import React from 'react';
//Reducer
import AppReducer from './AppReducer';

//Create Context
export const GlobalContext = React.createContext({});

const initialState = {
  products: [],
};

//Provider Components
export const GlobalProvider = (props) => {
  //------------------------------------------------
  // Operações referentes ao Loading
  //------------------------------------------------

  //Login
  const [loading, setLoading] = React.useState(false);

  //------------------------------------------------
  // Operações referentes ao Fetch Inicial
  //------------------------------------------------

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
      //Adiciona o objeto qtd
      const mapData = filterData.map((item) => {
        return {
          avatar: item.avatar,
          description: item.desciption,
          id: item.id,
          name: item.name,
          price: item.price,
          qtd: 1,
        };
      });
      //Seta a Array filtrada
      setData(mapData);
    } catch (err) {
      console.log('error', err);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  //------------------------------------------------
  // Operações referentes aos comportamentos gerenciados por ContexAPI + Reducer
  //------------------------------------------------

  //Reducer
  const [state, setState] = React.useReducer(AppReducer, initialState);
  //const Reducers
  const ADD_CART = 'ADD_CART';
  const REMOVE_CART = 'REMOVE_CART';
  const ADD_QTD = 'ADD_QTD';

  //actions
  function addToCart(value, countQtd) {
    //Verifica se o item adicionado já existe na lista
    let compareItemsProducts = state.products.findIndex(
      (val) => val.id === value.id,
    );
    if (compareItemsProducts < 0) {
      //Adiciona Card no Carrtinho
      setState({ type: ADD_CART, payload: value });
    } else {
      //Se já existir o item no Carrinho, adiciona a quantidade do item setado no count
      setState({ type: ADD_QTD, payload: countQtd });
    }
  }
  //Remove o Item do Carrinho
  function removeToCart(value) {
    setState({ type: REMOVE_CART, payload: value.id });
  }

  //--------------------------------------------

  return (
    <GlobalContext.Provider
      value={{
        loading,
        setLoading,
        state,
        setState,
        addToCart,
        removeToCart,
        data,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
