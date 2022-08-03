//React
import React from 'react';
//Styles
import './GlobalStyles/App.module.scss';
//Context
import { GlobalProvider } from './Contexts/GlobalState';
//Components
import Header from './Components/Header/Header';
//Pages
import Home from './Pages/Home';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Home />
    </GlobalProvider>
  );
}

export default App;
