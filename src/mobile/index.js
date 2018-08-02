import React,{Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Router from './routes/index.js';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers/index.js';
import thunk from 'redux-thunk';

const store=createStore(reducers,applyMiddleware(thunk));

ReactDOM.render(
   <Provider store={store}>
      <Router />
   </Provider>,
   document.getElementById('root')
)