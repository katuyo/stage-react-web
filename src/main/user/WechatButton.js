/**
 * @author palmtale
 * @since 2017/4/17.
 */
import React, { Component } from 'react';

import 'font-awesome/css/font-awesome.min.css';
import './ThirdAuth.css';

class WechatButton extends Component {

    render() {
        return (
            <li className="list-inline-item">
                <a href="#" role="button" className="icon-link round wechat fill">
                    <i className="fa fa-wechat"></i>
                </a>
            </li>
        );
    }
}

export default WechatButton;
