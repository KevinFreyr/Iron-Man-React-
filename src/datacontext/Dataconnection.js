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
      var valid = firebase.database().ref('matarkosning/' + id);
          valid.on('value', function(snapshot) {
            console.log(snapshot.val());
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

  writeToDatabase(voteID, idList) {
  for(var i = 0; i < idList.length; i++) {
    firebase.database().ref('matarkosning/' + voteID + idList[i]).set({
      voteID: voteID,
      userID: idList[i]
    });
  }
  
}
}

export default Dataconnection;

