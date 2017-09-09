import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { composeWithDevTools} from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';  
import { Component } from 'react';
import logo from './logo.svg';
import App from './App'

import registerServiceWorker from './registerServiceWorker';

const store = createStore(
   rootReducer,
   composeWithDevTools(
     applyMiddleware(thunk)
   ) 
);


ReactDOM.render(
	<Router>
	<Provider store={store}>
	<App />
	</Provider>
	</Router>,
	document.getElementById('root')
);
registerServiceWorker();
