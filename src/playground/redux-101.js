import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;

    }

    console.log('running');
    return state;

});


console.log(store.getState());

//Actions - object thate get sent to the store

// Increment, decrement, reset



// I`d like to increment the count
store.dispatch({
    type: 'INCREMENT'
});
console.log(store.getState());

store.dispatch({
    type: 'DECREMENT'
});
console.log(store.getState());

store.dispatch({
    type: 'DECREMENT'
});
console.log(store.getState());

store.dispatch({
    type: 'DECREMENT'
});
console.log(store.getState());


store.dispatch({
    type: 'RESET'
});
console.log(store.getState());



// I`d like to reset count to zero.


