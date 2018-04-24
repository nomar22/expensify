import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('Should return 0 if no expenses', ()=>{
    const emptyExpenses  = [];

    const result = selectExpensesTotal(emptyExpenses);

    expect(result).toBe(0);
    
});

test('Should return correctly with a single expense', ()=>{
   

    const result = selectExpensesTotal([expenses[0]]);

    expect(result).toBe(150);
    
});

test('Should return correctly with multiple expenses', ()=>{
    const result = selectExpensesTotal(expenses);

    expect(result).toBe(1780);
    
});