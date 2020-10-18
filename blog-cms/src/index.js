import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.min.css';
import './static/css/common.scss';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
ReactDOM.render(
  <Router>
    <App/>
  </Router>,
  document.getElementById('root')
);

