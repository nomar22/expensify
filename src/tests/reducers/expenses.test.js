import expensesReducer from'../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state ', ()=>{
    const state = expensesReducer(undefined,{type:'@@INIT'});

    expect (state).toEqual([]);
});


test ('Should remove expense by id',()=>{
    const action = {
        type:'REMOVE_EXPENSE',
        id: expenses[1].id
    };

    const state = expensesReducer(expenses,action);

    expect(state).toEqual([expenses[0],expenses[2],expenses[3]]);
});

test ('Should not remove if id not found',()=>{
    const action = {
        type:'REMOVE_EXPENSE',
        id: '-1'
    };

    const state = expensesReducer(expenses,action);

    expect(state).toEqual([expenses[0],expenses[1],expenses[2],expenses[3]]);
});

// should add an expense

test('Should add an expense', ()=>{
    const expense ={
        description: 'Beer',
        note: 'Beer at bar',
        amount: 50,
        createdAt: 0
    }
    const action = {
        type:'ADD_EXPENSE',
        expense
    }

    const state = expensesReducer(expenses,action );

    expect(state).toEqual([...expenses,expense]);


});

// should edit an expense

test ('Should edit an expense',()=>{
    const action = {
        type:'EDIT_EXPENSE',
        id:expenses[1].id,
        updates :{description:'Black Car'}
    }

    const state = expensesReducer(expenses,action);

    expect(state[1].description).toEqual('Black Car');
    

});

//should not edit if expense not found

test ('Should edit an expense',()=>{
    const action = {
        type:'EDIT_EXPENSE',
        id:'bla',
        updates :{description:'Black Car'}
    }

    const state = expensesReducer(expenses,action);

    expect(state).toEqual(expenses);

});