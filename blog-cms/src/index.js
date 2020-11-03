import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.min.css';
import './static/css/common.scss';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import store from './store/index';
import {Provider} from 'react-redux';

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App/>
		</Router>
	</Provider>,
  document.getElementById('root')
);

