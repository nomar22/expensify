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

const database = firebase.database();

database.ref().set({
    name: 'Rafael Egidio',
    age: 32,
    isSingle: false,
    location: {
        city: 'Contagem',
        country: 'Brasil'
    }
});

//   database.ref().set('this is my data');

database.ref('age').set(33);


database.ref('location/city').set('Belo Horizonte');
database.ref('attributes').set({
    height: 185,
    weight: 92,
    hairCollor: 'black',
    ethnicity: 'latin'
});

console.log('I made a request to change the data.');
