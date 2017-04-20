/**
 * @author palmtale
 * @since 2017/4/18.
 */
import React, { Component } from 'react';

import 'font-awesome/css/font-awesome.min.css';
import './ThirdAuth.css';

class GithubButton extends Component {

    onclick() {
        let authUrl = "https://github.com/login/oauth/authorize?scope=user:email";
        authUrl += "&client_id=" + this.props.clientId + "&redirect_uri=" + this.props.redirectUri;
        return () => {
            window.open(authUrl, "_blank","width=1000,height=920,resizable='no',scrollbars='no'");
        }
    }

    render() {
        let authUrl = "https://github.com/login/oauth/authorize?scope=user:email";
        authUrl += "&client_id=" + this.props.clientId + "&redirect_uri=" + this.props.redirectUri;
        return (
            <li className="list-inline-item">
                <a href={authUrl} role="button" className="icon-link round github fill">
                    <i className="fa fa-github"></i>
                </a>
            </li>
        );
    }
}

export default GithubButton;

