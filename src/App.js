import React from "react";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Routing from "./Routing";

import "./App.css";
import ProductContextProvider from "./contexts/productsContext";
import AuthContextProvider from "./contexts/authContext";
import CartContextProvider from "./contexts/cartContext";

const App = () => {
  return (
    <AuthContextProvider>
      <ProductContextProvider>
        <CartContextProvider>
          <Header />
          <Routing />
          <Footer />
        </CartContextProvider>
      </ProductContextProvider>
    </AuthContextProvider>
  );
};

export default App;
