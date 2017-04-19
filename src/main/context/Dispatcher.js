/**
 * @author palmtale
 * @since 2017/4/18.
 */

import React, { Component } from 'react';
import Pace from "pace-progress/pace.min";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'pace-progress/themes/blue/pace-theme-flash.css';

Pace.start({
    document: false
});

class Dispatcher extends Component {

    render() {
        let className = "";
        let component = this;
        React.Children.map(this.props.children, function (route) {
            if(location.pathname === route.props.path) {
                document.title = route.props.title;
                className = route.props.className;
                component = route;
            }
        });
        return (<div className={className}>{component}</div>);
    }
}

export default Dispatcher;