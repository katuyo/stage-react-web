/**
 * @author palmtale
 * @since 2017/4/17.
 */

import React, { Component } from 'react';
import axios from 'axios';

import ThirdAuthPanel from "./ThirdAuthPanel";

import './Login.css';
import banner from '../context/logo-dark.png';

class Login extends Component {

    login = () => {
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;

        if(!username || !password) {
            //TODO Input Validator required, error prompt.
            return ;
        }
        let headers = {'X-Requested-With': 'XMLHttpRequest'};
        // 1st then csrf token
        //TODO Get csrf token, would be better rendered from server.
        axios.get('/oauth/token')
            .then(r => {
                for (const [k, v] of Object.entries(r.headers)) {
                    if(k.indexOf('set-')===0) {
                        headers[k.substring(4)] += (v+';') ;
                    }
                }
                headers['X-CSRF-TOKEN'] = r.data;
                return axios.post('/oauth/token',
                    {grant_type: 'password', client_id: '10000004', client_secret: 'Qxcnjb7dLoELoJ628f3Omc76OyXiZAjsDNJ2EyYy',
                        username: username, password: password, scope: '*'},
                    {headers: headers})
            }).then(r => {
                //TODO set accessToken as the temp app_token
                document.cookie= ('Authorization=' + r.data.token_type + ' ' + r.data.access_token);
                return this.props.callback(true);
                //TODO check if set-cookie 'app_token' there, if so else false.
                for (const [k, v] of Object.entries(r.headers)) {
                    if(k.indexOf('set-cookie') === 0 ) {
                        for(const cookie of v){
                            if(cookie.indexOf(this.props.sessionKey || 'app_token=') === 0) {
                                return this.props.callback(true);
                            }
                        }
                    }
                }
                return this.props.callback(false);
            }).catch(e => {
                return this.props.callback(false);
            });
    };

    render = () =>
         (<div className="page-content">
                <img src={banner} alt="" width="160" className="mb-10"/>
                <div className="form-group row">
                    <div className="col-12">
                        <input type="text" placeholder="Username" className="form-control" id="username" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-12">
                        <input type="password" placeholder="Password" className="form-control" id="password" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-6">
                        <div className="checkbox text-left">
                            <input id="chkRemember" type="checkbox" value="remember"/>
                            <label htmlFor="chkRemember">Remember me</label>
                        </div>
                    </div>
                    <div className="col-6">
                        <a href="forgot-password.html" className="d-block form-control-static text-right">Forgot a Passowrd?</a>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-12">
                        <button type="submit" className="btn btn-inverse btn-rounded btn-block" onClick={this.login}>Sign in</button>
                    </div>
                </div>
                <hr className="form-group"/>
                <ThirdAuthPanel className="form-group row"/>
                <hr className="form-group"/>
            </div>);
}

export default Login;