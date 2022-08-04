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
  const [dataWithFilter, setDataWithFilter] = React.useState([]);
  const [text, setText] = React.useState();

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
      setDataWithFilter(mapData);
    } catch (err) {
      console.log('error', err);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);
  const withFilter = (products, term) => {
    if (!term) {
      return products;
    } else {
      return products.filter(
        (product) => product.name.toLowerCase().includes(term.toLowerCase()),
        setData,
      );
    }
  };

  React.useEffect(() => {
    const ii = withFilter(data, text);
    setDataWithFilter(ii);
  }, [text, data]);

  //------------------------------------------------
  // Operações referentes aos comportamentos gerenciados por ContexAPI + Reducer
  //------------------------------------------------

  //Reducer
  const [state, setState] = React.useReducer(AppReducer, initialState);
  //const Reducers
  const ADD_CART = 'ADD_CART';
  const REMOVE_CART = 'REMOVE_CART';
  const ADD_QTD = 'ADD_QTD';
  const MOD_QTD = 'MOD_QTD';

  //actions
  function addToCart(data, countQtd) {
    //Verifica se o item adicionado já existe na lista
    let compareItemsProducts = state.products.findIndex(
      (val) => val.id === data.id,
    );
    if (compareItemsProducts < 0) {
      //Adiciona Card no Carrtinho
      setState({ type: ADD_CART, payload: { data, countQtd } });
    } else {
      //Se já existir o item no Carrinho, adiciona a quantidade do item setado no count
      setState({ type: ADD_QTD, payload: { data, countQtd } });
    }
  }
  //Remove o Item do Carrinho
  function removeToCart(data) {
    setState({ type: REMOVE_CART, payload: data.id });
  }
  //Modifica Itens do Card Cart
  function modToCart(data, countQtd) {
    setState({ type: MOD_QTD, payload: { data, countQtd } });
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
        ADD_QTD,
        modToCart,
        text,
        setText,
        dataWithFilter,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
