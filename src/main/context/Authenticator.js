/**
 * @author palmtale
 * @since 2017/4/20.
 */

import React from 'react';
import {Redirect} from 'react-router-dom';


class Authenticator extends React.Component {

    state = {
        refactored: false,
        cookie: null,
        from: null,
    };

    refactor = (props) => new Promise((resolve, reject) => {
        try{
            props.cookie = null;
            let cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                if (cookies[i].indexOf('topup_sesstion') === 0) {
                    props.cookie = cookies[i].substring(cookies[i].indexOf('=') + 1);
                    break;
                }
            }
            resolve(props);
        } catch (e) {
            reject(e);
        }
    });

    render = () => {
        if (!this.state.refactored) {
            this.refactor(this.props)
                .then(u => {
                    this.setState({refactored: true});
                }).catch(e => {
                this.setState({refactored: true});
            });
        }
        const {component: LoginPage} = this.props;
        if (this.state.cookie) {
            return (<Redirect to={{pathname: this.state.from}}/>);
        } else if (this.state.refactored) {
            return (<LoginPage />);
        } else {
            return (<div />);
        }
    }
}

export default Authenticator;