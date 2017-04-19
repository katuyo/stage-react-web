/**
 * @author palmtale
 * @since 2017/4/18.
 */
import React, { Component } from 'react';

import 'font-awesome/css/font-awesome.min.css';
import './ThirdAuth.css';

class LinedInButton extends Component {

    render() {
        return (
            <li className="list-inline-item">
                <a href="#" role="button" className="icon-link round linkedin fill">
                    <i className="fa fa-linkedin"></i>
                </a>
            </li>
        );
    }
}

export default LinedInButton;