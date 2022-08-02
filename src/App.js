//React
import React from 'react';
//Styles
import './GlobalStyles/App.module.scss';
//Components
import Header from './Components/Header/Header';
//Pages
import Home from './Pages/Home';

function App() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
