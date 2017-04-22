/**
 * @author palmtale
 * @since 2017/4/20.
 */

import React from 'react';
import {Redirect, matchPath} from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

class Authenticator extends React.Component {

    state = {
        logged: false
    };

    //TODO Warning: the react-router logic is injected.
    static contextTypes = {
        router: PropTypes.shape({
            history: PropTypes.shape({
                push: PropTypes.func.isRequired,
                replace: PropTypes.func.isRequired
            }).isRequired,
            staticContext: PropTypes.object
        }).isRequired
    };

    logged = (result) => {
        this.setState({logged: result});
    };

    findCodeInUrl = () => {
        let params = location.search || location.hash;
        if(params.indexOf('#?')) {
            params = params.substring(2);
        } else {
            params = params.substring(1);
        }
        for (const kv of params.split('&')){
            let kvPair = kv.split('=');
            if(kvPair[0] === 'code') {
                return kvPair[1];
            }
        }
        return '';
    };

    providerVerify = () => {
        const {provider} = matchPath(location.pathname, this.props);
        if(!provider) {
            return
        }
        const code = this.findCodeInUrl();
        if(!code) {
            return
        }
        //TODO axios backend, added to container.
        axios.post('/oauth/code', {provider: provider, code: code}).then(r => {
            this.setState({logged: true});
        }).catch(e => {
            //TODO error prompt
        });
    };

    componentWillMount = () => {
        this.providerVerify();
    };

    render = () => {
        if (this.state.logged) {
            const {from} = this.context.router.history.location.state;
            return (<Redirect to={from} />); //
        } else {
            const {component: LoginPage} = this.props;
            return (<LoginPage callback={this.logged}/>);
        }
    }
}

export default Authenticator;