/**
 * @author palmtale
 * @since 2017/4/17.
 */

import React, { Component } from 'react';

import logo from './context/logo.svg';

import './Home.css';

class Home extends Component {
  render() {
    return (
        <div>
          <image src={logo}></image>
        </div>
    );
  }
}

export default Home;