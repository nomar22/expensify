import { createStore } from 'redux';

const store = createStore((state = { count: 0 }) => {
    return state;

});


console.log(store.getState());

//Actions - object thate get sent to the store

// Increment, decrement, reset

// I`d like to increment the count
// I`d like to reset count to zero.

console.log(store.getState());
