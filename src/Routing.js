import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import AddProductForm from "./Components/AddProductForm/AddProductForm";
import Cart from "./Components/Cart/Cart";
import EditProductForm from "./Components/EditProductForm/EditProductForm";
import LoginForm from "./Components/LoginForm/LoginForm";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import ProductsLists from "./Components/ProductsList/ProductsLists";
import SignUpForm from "./Components/SignUpFrom/SignUpForm";

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/add-product" element={<AddProductForm />} />
          <Route path="/products" element={<ProductsLists />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/edit/:id" element={<EditProductForm />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
