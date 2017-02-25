import React, { Component } from 'react';

import * as firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyDdVwD8n2zaMJ10N9fn_Wq8vYGFf5M9UCU',
  databaseURL: 'https://matarkosning.firebaseio.com/'
}

firebase.initializeApp(config);

class Dataconnection extends Component {
  constructor(props) {
    super(props);
  }
  test() {
      console.log("test()");
  }
  checkIfValid(id) {
      console.log("Checkin validation on: " + id);
      var valid = firebase.database().ref('matarkosning/' + id[0] + "-" + id[1]);
          valid.on('value', function(data) {
            data.forEach(function(data) {
              console.log("The " + data.key + " activitity is " + data.val());
            })
      });
      if(valid) {
          console.log('valid');
          return true;
      } 
      else {
          console.log("INVALID!");
          return false;
      }
  }

  isGameValid(id) {
     var fixedID = id.split("=");
    var valid = firebase.database().ref('matarkosning/' + fixedID[1]);
        valid.on('value', function(snapshot) {
            var result = (snapshot.val() !== null);
            if(result) {
              console.log("Game is valid with id: " + fixedID[1]);
            } else {
              console.log("Game is NOT valid with id: " + fixedID[1]);
            }
            return result;
    });
  }

  isVoterValid(gameID, id) {
    var fixedID = gameID.split("=");
    var valid = firebase.database().ref('matarkosning/' + fixedID[1] + "/" + fixedID[1] + "-" + id);
        valid.on('value', function(snapshot) {
            var result = (snapshot.val() !== null) && (snapshot.val().active !== false);
            if(result) {
              console.log("Voter is valid with id: " + id);
            } else if(result && snapshot.val().active === false) {
              console.log("Voter has already voted");
            } else {
              console.log("Voter is NOT valid with id: " + fixedID[1] + " - " + id);
            }
            return result;
    });
  }

  writeToDatabase(gameID, idList) {
    firebase.database().ref('matarkosning/' + gameID).set({});
  for(var i = 0; i < idList.length; i++) {
    firebase.database().ref('matarkosning/' + gameID + '/' + idList[i]).set({
      active: true,
      voteResults: ''
    });
  }
  
}
}

export default Dataconnection;

