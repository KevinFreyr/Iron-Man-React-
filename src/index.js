import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import App from './App';
import './index.css';
import Matur from './modules/Matur';

ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={App}/>
      <Route path="/vote/:id" component={Matur}/>
  </Router>,
  document.getElementById('root')
);
