import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
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


const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});



//Actions - object thate get sent to the store

// Increment, decrement, reset



// I`d like to increment the count
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});


store.dispatch({
    type: 'DECREMENT',
    decrementBy : 10
});

store.dispatch({
    type: 'DECREMENT'

});



store.dispatch({
    type: 'RESET'
});




// I`d like to reset count to zero.


