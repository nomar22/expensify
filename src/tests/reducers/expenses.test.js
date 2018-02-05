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