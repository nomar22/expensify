import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    startAddExpense,
    addExpense,
    editExpense,
    removeExpense,
    setExpenses,
    startSetExpenses,
    startRemoveExpense,
    startEditExpense
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase'

const uid = 'thisismyaadd';
const defaultAuthState = {auth:{uid}};
const creatMockStore = configureMockStore([thunk]);


beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt };
    });
    database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
});

test('Should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should remove expense from firebase', (done) => {
    const store = creatMockStore(defaultAuthState);
    const id = expenses[0].id;

    store.dispatch(startRemoveExpense({ id })).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
    });


});

test('Should setup edit expense action  object', () => {
    const action = editExpense('45', { note: '45' });


    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '45',
        updates: { note: '45' }
    });

});



test('Should setup add expense action with provided properties', () => {

    const action = addExpense(expenses[1]);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[1]
    });


});

test('should add expense to database and store', (done) => {

    const store = creatMockStore(defaultAuthState);
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 1000
    };
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`users/${uid}/  expenses/${actions[0].expense.id}`).once('value');


    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });


});



test('should add expense with defaults to database and store', (done) => {

    const store = creatMockStore(defaultAuthState);
    const defaultData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    };
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...defaultData
            }
        });
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');


    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(defaultData);
        done();
    });

});

test('Should setup expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});



test('should fetch expenses from firebases', () => {
    const store = creatMockStore(defaultAuthState);
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });

    });
    // .then(() => {
    // });
});

test('should setup edit Expense from firebase', (done) => {
    const store = creatMockStore(defaultAuthState);
    const id = expenses[0].id;
    const updates = {amount:expenses[0].amount, note: expenses[0].note};
    store.dispatch(startEditExpense(id,updates)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id,
            updates
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
        

    }).then((snapshot)=>{
        expect(snapshot.val().amount).toBe(updates.amount);
        done();
    });
});
