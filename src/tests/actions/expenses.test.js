import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'; 
import { startAddExpense,addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase'

const creatMockStore = configureMockStore([thunk]);

test('Should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
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

test ('should add expense to database and store',(done)=>{

    const store = creatMockStore({});
    const expenseData = {
        description:'Mouse',
        amount:3000,
        note: 'This one is better',
        createdAt: 1000
    };
    store.dispatch(startAddExpense(expenseData)).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense:{
                id:expect.any(String),
                ...expenseData
            }
        });
       return database.ref(`expenses/${actions[0].expense.id}`).once('value');
        

    }).then((snapshot)=>{
            expect(snapshot.val()).toEqual(expenseData);
            done();
        });


});

test ('should add expense with defaults to database and store',(done)=>{

    const store = creatMockStore({});
    const defaultData = {
        description :'',
        note : '',
        amount : 0,
        createdAt : 0
    };
    store.dispatch(startAddExpense({})).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense:{   
                id:expect.any(String),
                ...defaultData
            }
        });
       return database.ref(`expenses/${actions[0].expense.id}`).once('value');
        

    }).then((snapshot)=>{
            expect(snapshot.val()).toEqual(defaultData);
            done();
        });
    
});
// test('Should setup add expense action with default properties', () => {
//     const defaultExpense = {
//         description: '',
//         note: '',
//         amount: 0,
//         createdAt: 0
//     };

//     const action = addExpense();


//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             id: expect.any(String),
//             ...defaultExpense
//         }
//     });

// })