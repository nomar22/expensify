import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';



store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);

});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -11000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Cofee', amount: 300, createdAt: -1000 }));

// store.dispatch(removeExpense({ id: expenseTwo.expense.id }));
// store.dispatch(editExpense(expenseOne.expense.id, { amount: 500 }))
<<<<<<< HEAD
store.dispatch(setTextFilter('e'));
store.dispatch(setTextFilter(''));
=======
// store.dispatch(setTextFilter('CoFee'));
// store.dispatch(setTextFilter(''));
>>>>>>> 8c3f0b738380ed588ba7973a6bf3a2fa1861b3a6

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(126));
// store.dispatch(setStartDate());

// store.dispatch(setEndDate(148));
// store.dispatch(setEndDate());

// const demoState = {
//     expenses: [{
//         id: 'a1234',
//         description: 'January Rent',
//         note: 'This was the final pyament for that address',
//         amount: 54500,
//         createdAt: 0
//     }],
//     filters: {
//         text: 'rent',
//         sortBy: 'amount',// date or amount
//         startDate: undefined,
//         endDate: undefined
//     }
// };



const user = {
    name: 'Jhon',
    age: 24
}

// console.log({
//     age: 22,
//     ...user,
//     location: 'filadelfia',
//     age: 23
// });