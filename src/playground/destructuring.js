///
///Object Destructuring
//

// const person = {
//     name: 'Rafael',
//     age: 31,
//     location: {
//         city: 'Contagem',
//         temp: 32
//     }
// };

// const { name:fistName = 'Anonimo', location, age } = person;

// // const name = person.name;
// // const age = person.age;

// console.log(`${fistName} is ${age}.`);

// const {city,temp:temperature} = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`)
// }


// const book = {
//     title: 'Ego is the Enemy',
//     author : 'Ryan Holiday',
//     publisher :{
//         name:'Penguin'
//     }
// };

// // const {title, author, publisher} = book;

// const{name:publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);// If there is no name default value is Self-Published



///
// Array Destructuring
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pensylvania','19147'];

const [, city, state,zip, complement='Sem complemento'] = address;

console.log (`You are in ${city} state of ${state}  and these are the complements ${complement}`);


const item = ['Coffe (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , mediumPrice] = item;
console.log(`The medium ${itemName} costs ${mediumPrice}`);

