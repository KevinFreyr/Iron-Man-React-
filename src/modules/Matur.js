import React, { Component } from 'react';
import mat from '../matur.png';
import Data from '../datacontext/Dataconnection';
import Questions from '../questions/questions';

import '../App.css';


class Matur extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      numVoters: 0,
      valid: true
    }
    console.log("test::::" + props.params.id);
    var test = new Data;
    test.checkIfValid(props.params.id);
  }


  render() {
    return (
      <div className="Matur">
        <div className="App-header">
          <img src={mat} className="App-logo" alt="logo" />
        </div>
        <h2>ID: {this.props.params.id}</h2>
          <Questions />
      </div>
    );
  }
}

export default Matur;

