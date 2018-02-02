import { addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('Should setup remove expense action object', ()=>{
    const action = removeExpense({id:'123abc'});

    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('Should setup edit expense action  object', ()=>{
    const action = editExpense('45',{note:'45'});


    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'45',
        updates:{note:'45'}
    });

});



test('Should setup add expense action with provided properties', ()=>{
 const expenseData = {
    description :'Rent',
    amount: 10595,
    createdAt:1,
    note: 'This was the last expense'
 };
 const action = addExpense(expenseData);

expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense:{
        ...expenseData,
        id:expect.any(String)
    }
});


})

test('Should setup add expense action with default properties', ()=>{
    const defaultExpense =  {
        description : '',
        note : '',
        amount :0,
        createdAt : 0
     };

    const action = addExpense();

    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            id:expect.any(String),
            ...defaultExpense
        }
    });

})