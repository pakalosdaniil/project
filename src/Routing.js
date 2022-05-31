import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import AddProductForm from './Components/AddProductForm/AddProductForm';
import LoginForm from './Components/LoginForm/LoginForm';
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
                <Route path='/product-card' element={<AddProductForm/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Routing;