/**
 * @author palmtale
 * @since 2017/4/17.
 */

import React, { Component } from 'react';
import Pace from "pace-progress/pace.min";

import ThirdAuthPanel from "./ThirdAuthPanel";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'pace-progress/themes/blue/pace-theme-flash.css';
import './Login.css';
import banner from '../context/logo-dark.png';

Pace.start({
    document: false
});

class Login extends Component {

    submit() {
        alert('Ajax to server');
    }

    render() {
        return (
            <div className="page-content">
                <img src={banner} alt="" width="160" className="mb-10"/>
                <div className="form-group row">
                    <div className="col-12">
                        <input type="text" placeholder="Username" className="form-control" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-12">
                        <input type="password" placeholder="Password" className="form-control" />
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
                        <button type="submit" className="btn btn-inverse btn-rounded btn-block" onClick={this.submit}>Sign in</button>
                    </div>
                </div>
                <hr className="form-group"/>
                <ThirdAuthPanel className="form-group row"/>
                <hr className="form-group"/>
            </div>
        );
    }
}

export default Login;