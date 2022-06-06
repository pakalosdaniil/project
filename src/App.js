import React from "react";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Routing from "./Routing";

import "./App.css";
import ProductContextProvider from "./contexts/productsContext";
import AuthContextProvider from "./contexts/authContext";

const App = () => {
  return (
    <AuthContextProvider>
      <ProductContextProvider>
        <Header />
        <Routing />
        <Footer />
      </ProductContextProvider>
    </AuthContextProvider>
  );
};

export default App;
