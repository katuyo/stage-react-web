/**
 * @author palmtale
 * @since 2017/4/17.
 */


import React from 'react'
import {
    BrowserRouter,
    Route
} from 'react-router-dom';

import Home from '../Home';
import Login from '../user/Login';
import Dispatcher from "./Dispatcher";

const Router = () => (
    <BrowserRouter>
        <Dispatcher>
            <Route exact path="/" className="main-container" title="Home" component={Home}/>
            <Route path="/login" className="page-container" title="Login" component={Login}/>
        </Dispatcher>
    </BrowserRouter>
);

export default Router;