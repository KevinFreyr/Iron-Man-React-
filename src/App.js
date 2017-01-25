import React, { Component } from 'react';
import matur from './matur.png';

import Questions from './questions/questions';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      numVoters: 0
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={matur} className="App-logo" alt="logo" />
        </div>
        <div>
          Hello stranger! 
        </div>
      </div>
    );
  }
}

export default App;

