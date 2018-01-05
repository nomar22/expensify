import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses.js'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

//addExpense -> water bill
//addExpense -> gas bill
//setText Filter-> bill(2 items)
//getVisibleExpeses ->print visibles ones to scree
store.dispatch(addExpense({ description: 'Water bill', amount: 100, createdAt: 1 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 300, createdAt: 2 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 300, createdAt: 2 }));
// store.dispatch(setTextFilter('bill'));
store.dispatch(setTextFilter('water'));


setTimeout(()=>{

<<<<<<< HEAD
    store.dispatch(setTextFilter('rent'));
    

=======
    store.dispatch(setTextFilter('bil'));
>>>>>>> b15397526a7ced225173e616dc8952bb3980550b

}, 3000);

// store.subscribe(() => {
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

// });

const jsx = (
    <Provider store={store} >
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
