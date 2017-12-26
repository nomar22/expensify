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


const book = {
    title: 'Ego is the Enemy',
    author : 'Ryan Holiday',
    publisher :{
        // name:'Penguin'
    }
};

const {title, author, publisher} = book;

const{name:publisherName = 'Self-Published'} = publisher;

console.log(publisherName);// If there is no name default value is Self-Published

