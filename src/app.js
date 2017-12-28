import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import getVisibleExpenses from './selectors/expenses.js'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

//addExpense -> water bill
//addExpense -> gas bill
//setText Filter-> bill(2 items)
//getVisibleExpeses ->print visibles ones to scree

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);

});

store.dispatch(addExpense({ description: 'Water bill', amount: 100, createdAt: 1 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 300, createdAt: 2 }));
store.dispatch(setTextFilter('bill'));
store.dispatch(setTextFilter('water'));


ReactDOM.render(<AppRouter />, document.getElementById('app'));
