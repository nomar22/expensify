import { createStore, combineReducers } from 'redux';
import uuid from 'uuid'

//ADD_Expense
const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
     } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

//EDIT Expense

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

//REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//SET_TEXT_FILTER
const setTextFilter = (text= '') =>({
    type: 'SET_TEXT_FILTER',
    text

});



//SORT_BY_DATE
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE

//Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => (id != action.id))

        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                };
            });
        default:
            return state;
    }
};


const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',// date or amount
    startDate: undefined,
    endDate: undefined

};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
        return {
            ...state,
            text:action.text

        }
        default:
            return state;
    }
}

//Store Creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    console.log(store.getState());

});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Cofee', amount: 300 }));

store.dispatch(removeExpense({ id: expenseTwo.expense.id }));
store.dispatch(editExpense(expenseOne.expense.id, { amount: 500 }))

store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter(''));


const demoState = {
    expenses: [{
        id: 'a1234',
        description: 'January Rent',
        note: 'This was the final pyament for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',// date or amount
        startDate: undefined,
        endDate: undefined
    }
};



const user = {
    name: 'Jhon',
    age: 24
}

console.log({
    age: 22,
    ...user,
    location: 'filadelfia',
    age: 23
});