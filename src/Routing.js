import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';

const Routing = () => {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path='/login' element={<LoginForm/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Routing;