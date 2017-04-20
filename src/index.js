/**
 * @author palmtale
 * @since 2017/4/17.
 */

import React from 'react';
import ReactDOM from 'react-dom';

import Router from './main/context/Dispatcher';

import './index.css';

ReactDOM.render(
  <Router />,
  document.getElementById('react-container')
);
