import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import AddProductForm from './Components/AddProductForm/AddProductForm';
import EditProductForm from './Components/EditProductForm/EditProductForm';
import LoginForm from './Components/LoginForm/LoginForm';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import ProductsLists from './Components/ProductsList/ProductsLists';
import SignInForm from './Components/SignInFrom/SignInForm';

const Routing = () => {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path='/login' element={<LoginForm/>}/>
                <Route path='/signin' element={<SignInForm/>}/>
                <Route path='/add-product' element={<AddProductForm/>}/>
                <Route path='/products' element={<ProductsLists/>}/>
                <Route path='/products/:id' element={<ProductDetails/>}/>
                <Route path='/edit/:id' element={<EditProductForm/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Routing;