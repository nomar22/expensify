import uuid from 'uuid';
import database from '../firebase/firebase'
//Component call action generator
// action generagtor returns object
//component dispatches object
// redux store changes


//now
// component call action generator
// action generator returns function
// component dispatches function(?) new implementation
// functions runs()
//ADD_Expense
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

// default parameter as the addExpense in another way.
export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;

        const expense = {description,note, amount, createdAt};

        database.ref('expenses').push(expense).then((ref)=>{
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));

        });
    };
};

//EDIT Expense

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

//REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});
