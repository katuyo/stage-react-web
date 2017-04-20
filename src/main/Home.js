/**
 * @author palmtale
 * @since 2017/4/17.
 */

import React from 'react';

import logo from './context/logo.svg';

import './Home.css';

const Home = ({time}) =>
        <div>
            <span>{time}</span>
            <image src={logo}/>
        </div>;


export default Home;