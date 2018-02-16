import React, { Component } from 'react';
import axios from 'axios';

import Data from './Data';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }
  componentDidMount() {
    axios.get('https://swapi.co/api/people')
      .then(response => {
        this.setState({ starwarsChars: response.data.results, next: response.data.next, prev: response.request.responseURL });
      })
      .catch(err => {
        console.error('error retrieving characters', err);
      });
  }
  nextPage = () => {
    if (!this.state.next) return;
    axios.get(this.state.next)
    .then(response => {
      this.setState({ starwarsChars: response.data.results, next: response.data.next, prev: response.data.previous });
    })
    .catch(err => {
      console.error('error going to next page', err);
    });
  }
  prevPage = () => {
    if (!this.state.prev) return;
    axios.get(this.state.prev)
    .then(response => {
      this.setState({ starwarsChars: response.data.results, next: response.data.next, prev: response.data.previous });
    })
    .catch(err => {
      console.error('error going to previous page', err);
    });
  }

  render() {
    return (
      <div className="App">
        <Data data={this.state.starwarsChars}/>
        <div className='page-nav'>
          <div className='prev' onClick={this.prevPage}>Previous Page</div>
          <div className='next' onClick={this.nextPage}>Next Page</div>
        </div>
      </div>
    );
  }
}

export default App;
