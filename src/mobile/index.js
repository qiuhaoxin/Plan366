import React,{Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Router from './routes/index.js';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const store=createStore();

ReactDOM.render(
   <Provider store={store}>
      <Router />
   </Provider>,
   document.getElementById('root')
)



