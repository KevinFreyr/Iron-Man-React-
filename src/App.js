import React, { Component } from 'react';
import matur from './matur.png';

import Questions from './questions/questions';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={matur} className="App-logo" alt="logo" />
        </div>
        <p className="App-intro">
          <Questions />
        </p>
      </div>
    );
  }
}

export default App;
