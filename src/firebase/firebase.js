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

// database.ref('isSingle').remove().then(() => {
//     console.log('isSingle removed');
// }).catch((e) => {
//     console.log('Fail on remove property', e);
// });

// database.ref('age').remove().then(() => {
//     console.log('age removed');
// }).catch((e) => {
//     console.log('Fail on remove property', e);
// });
database.ref().set({
    name: 'Rafael Egidio',
    age: 32,
    stressLevel:3,
    isSingle: false,
    job:{
        title:'Software developer',
        company:'Unisys'
    },
    location: {
        city: 'Contagem',
        country: 'Brasil'
    }
}).then(() => {
    console.log('Data is saved');
}).catch((e) => {
    console.log('This is failed', e);
});


database.ref().update({
    stressLevel: 7,
    'job/company': 'Lisbon',
    location:{
        city:'Lisbon',
        country: 'Portugal'
    }
}).then(()=>{
    console.log('Data is updated')
});

//   database.ref().set('this is my data');

// database.ref('age').set(33);


// database.ref('location/city').set('Belo Horizonte');


// database.ref('attributes').set({
//     height: 185,
//     weight: 92,
//     hairCollor: 'black',
//     ethnicity: 'latin'
// }).then(()=>{
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('Failed for the second one', e);

// });

// console.log('I made a request to change the data.');
