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
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            description = '',
            note = '',
            amount = 0,
            category ,
            createdAt = 0
        } = expenseData;

        const expense = { description, note, amount, createdAt, category };

        return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));

        });
    };
};

// startRemoveExpense
// test startRemoveExpense 
// use it on editexpensePage
//  adjust editExpensePage test
// database.ref('notes/-LBSV8SmrNp4ba5ycRH0').remove();
export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
            dispatch(removeExpense({id}));

        });
    };
};
//EDIT Expense

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense = (id,updates)=>{
    return(dispatch,getState)=>{
        const uid = getState().auth.uid;
        console.log('action')
        console.log(updates)
        return database.ref(`users/${uid}/expenses/${id}`).update(
            updates
        ).then(()=>{
            
            dispatch(editExpense(id,updates));
        });
    }
};

//REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// database.ref('expenses').on('value', (snapshot)=>{
//     const expenses = [];

//         snapshot.forEach(element => {
//             expenses.push({
//                 id:element.key,
//                 ...element.val()
//             });
//         });

//         console.log(expenses);


// });
export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
            const expenses = [];
            snapshot.forEach(element => {
                expenses.push({
                    id: element.key,
                    ...element.val()
                });
            });
            dispatch(setExpenses(expenses));

        });
    };
};

export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

