import * as firebase from 'firebase';
import expenses from '../tests/fixtures/expenses';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL:process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID 
  
};
firebase.initializeApp(config);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, googleAuthProvider,  database as default };

// //child_removed
// database.ref('expenses').on('child_removed',(snapshot)=>{
//     console.log(snapshot.key, snapshot.val())
// });


// //child_changed
// database.ref('expenses').on('child_changed',(snapshot)=>{
//     console.log('The new value is', snapshot.val());
// });

// //child_added
// database.ref('expenses').on('child_added',(snapshot)=>{
//     console.log('The value is', snapshot.val());
// });
// database.ref('expenses')
// .once('value')
// .then((snapshot)=>{
//     const expenses = [];

//     snapshot.forEach(element => {
//         expenses.push({
//             id:element.key,
//             ...element.val()
//         });
//     });

//     console.log(expenses);
// });

// database.ref('expenses').on('value', (snapshot)=>{
//     const expenses = [];

//         snapshot.forEach(element => {
//             expenses.push({
//                 id:element.key,
//                 ...element.val()
//             });
//         });
    
//         console.log(expenses);


// });


// database.ref('expenses').push(expenses[0]);
// database.ref('expenses').push(expenses[1]);
// database.ref('expenses').push(expenses[2]);
// database.ref('expenses').push('expenses[2]');










// database.ref('notes/-LBSV8SmrNp4ba5ycRH0').remove();


// database.ref('notes').push({
//     title:'Course topics',
//     body: 'React Native, Angular, Python '
// });

//

// console.log(database.ref().
// once('value')
// .then((data)=>{
//     const val = data.val();

//     console.log(val);

// }).catch((e)=>{
//     console.log('Problem on fetching data', e);
// }));

// // database.ref('isSingle').remove().then(() => {
// //     console.log('isSingle removed');
// // }).catch((e) => {
// //     console.log('Fail on remove property', e);
// // });

// // database.ref('age').remove().then(() => {
// //     console.log('age removed');
// // }).catch((e) => {
// //     console.log('Fail on remove property', e);
// // });
// database.ref().set({
//     name: 'Rafael Egidio',
//     age: 32,
//     stressLevel:3,
//     isSingle: false,
//     job:{
//         title:'Software developer',
//         company:'Unisys'
//     },
//     location: {
//         city: 'Contagem',
//         country: 'Brasil'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This is failed', e);
// });


// database.ref().update({
//     stressLevel: 7,
//     'job/company': 'Lisbon',
//     location:{
//         city:'Lisbon',
//         country: 'Portugal'
//     }
// }).then(()=>{
//     console.log('Data is updated')
// });

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
