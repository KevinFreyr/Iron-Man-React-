import React, { Component } from 'react';
import matur from './matur.png';
import * as firebase from 'firebase';
import Questions from './questions/questions';

import Data from './datacontext/Dataconnection';
import './App.css';
import Link from './Link';

// var config = {
//   apiKey: 'AIzaSyDdVwD8n2zaMJ10N9fn_Wq8vYGFf5M9UCU',
//   databaseURL: 'https://matarkosning.firebaseio.com/'
// }

// firebase.initializeApp(config);

function guid() {
  return s4();
}

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}



class App extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      numVoters: '',
      randomIDS: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({numVoters: event.target.value});
  }

  handleSubmit(event) {
    console.log('number of voters selected: ' + event.target.numVoters);
    event.preventDefault();
    var newArray = this.state.randomIDS.slice(); 
    for(var i = 0; i < parseInt(this.state.numVoters); i++) {
      var temp = guid();
      newArray.push(temp);

    }
    this.setState({
        randomIDS: newArray },
           function () {
              // ... at this point the state of the component is set ...
              console.log("WTF!! is wrong with this");
              console.log(this.state.randomIDS);
              var tempID = guid();
              var test = new Data;
              test.writeToDatabase(tempID, this.state.randomIDS);
        }
    )
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={matur} className="App-logo" alt="logo" />
        </div>
        <div>
          Hello stranger! 
            <form onSubmit={this.handleSubmit}>
              <label>
                Name:
                <input value={this.state.value} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
            </form>
        </div>
          <div className="row">
          <div className=".col-md-4">
              {this.state.randomIDS.map(function(value, i) {
                  let curr = this.state.current; 
                  return( 
                      <Link
                          key = {i}
                          loc = {i}
                          id = {value}
                      />
                  )
              }.bind(this))}
          </div>
      </div>
      </div>
    );
  }
}

export default App;

