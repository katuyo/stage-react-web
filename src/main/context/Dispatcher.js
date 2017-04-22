/**
 * @author palmtale
 * @since 2017/4/17.
 */


import React from 'react'
import {
    BrowserRouter,
    Route,
    matchPath
} from 'react-router-dom';
import Pace from "pace-progress/pace.min";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'pace-progress/themes/blue/pace-theme-flash.css';


import Home from '../Home';
import Login from '../user/Login';
import Authenticator from './Authenticator';
import UserRequiredRoute from "./UserRequiredRoute";
import Detail from "../item/Detail";

Pace.start({
    document: false
});

const Container = ({children}) => {
    let className = "";
    let component = this;

    React.Children.map(children, function (route) {
        if(matchPath(location.pathname, route.props)) {
            className = route.props.className;
            component = route;
        }
    });

    return (<div className={className}>{component}</div>);
};

export default () => (
    <BrowserRouter>
        <Container>
            <Route expect path="/" component={Home} />
            <Route path="/login" component={Login} className="page-container" />
            <Authenticator path="/login/:provider" component={Login} className="page-container" />
            <UserRequiredRoute path="/item" component={Detail} />
        </Container>
    </BrowserRouter>
);
