import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm';
import SignInForm from './Components/SignInFrom/SignInForm';

const Routing = () => {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path='/login' element={<LoginForm/>}/>
                <Route path='/signin' element={<SignInForm/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Routing;