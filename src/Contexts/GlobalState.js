//React
import React from 'react';

//Create Context
export const GlobalContext = React.createContext({});

//Provider Components
export const GlobalProvider = (props) => {
  //Login
  const [loading, setLoading] = React.useState(false);

  return (
    <GlobalContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
