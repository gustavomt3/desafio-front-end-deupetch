//React
import React from 'react';

//Create Context
export const GlobalContext = React.createContext({});

const initialState = {
  products: [],
};

//Provider Components
export const GlobalProvider = (props) => {
  //Login
  const [loading, setLoading] = React.useState(false);

  //Reducer
  const [state, setState] = React.useReducer(reducer, initialState);
  //const Reducers
  const ADD_CART = 'ADD_CART';
  const REMOVE_CART = 'REMOVE_CART';

  function reducer(state, action) {
    switch (action.type) {
      case 'ADD_CART':
        return { ...state, products: [...state.products, action.payload] };
      case 'REMOVE_CART':
        return {
          ...state,
          products: state.products.filter((data) => data.id !== action.payload),
        };
      default:
        return state;
    }
  }
  //actions
  function addToCart(value) {
    setState({ type: ADD_CART, payload: value });
  }
  function removeToCart(value) {
    setState({ type: REMOVE_CART, payload: value.id });
  }

  return (
    <GlobalContext.Provider
      value={{
        loading,
        setLoading,
        state,
        setState,
        addToCart,
        removeToCart,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
