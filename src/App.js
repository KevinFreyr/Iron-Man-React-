import React, { Component } from 'react';
import matur from './matur.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={matur} className="App-logo" alt="logo" />
        </div>
        <p className="App-intro">
          <div>
            Question 1
          </div>
        </p>
      </div>
    );
  }
}

export default App;
