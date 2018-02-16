import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import ExtendedInfo from './ExtendedInfo';

ReactDOM.render(
  <Router>
    <div className='container'>
      <h1 className="Header">React Wars</h1>
      <Route path='/' component={App} exact></Route>
<Route path='/info/:name' component={(props) => (<ExtendedInfo timestamp={Date.now().toString()} {...props} />)}></Route>
    </div>
  </Router>, document.getElementById('root'));