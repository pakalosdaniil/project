import React from 'react';

import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Routing from './Routing';

import './App.css';
import ProductContextProvider from './contexts/productsContext';

const App = () => {

  return (
    <ProductContextProvider>
      <Header/>
      <Routing/>
      <Footer/>
    </ProductContextProvider>
  );
};

export default App;