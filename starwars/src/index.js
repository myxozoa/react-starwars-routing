import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Character from './Character';

ReactDOM.render(
  <Router>
    <div>
      <Route path='/' component={App} exact></Route>
      <Route path='/character/:name' component={Character}></Route>
    </div>
  </Router>, document.getElementById('root'));
