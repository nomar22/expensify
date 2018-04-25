import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCZf1W7_fIaxnkTeRLDiKkPmDfYxMpShi8",
    authDomain: "expensify-a7f29.firebaseapp.com",
    databaseURL: "https://expensify-a7f29.firebaseio.com",
    projectId: "expensify-a7f29",
    storageBucket: "expensify-a7f29.appspot.com",
    messagingSenderId: "720397182129"
  };

  firebase.initializeApp(config);

  firebase.database().ref().set({
      name:'Rafael Egidio'
  });

