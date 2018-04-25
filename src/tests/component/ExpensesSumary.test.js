import React from 'react';
import {shallow} from 'enzyme'; 
import {ExpensesSumary} from '../../components/ExpensesSumary';
import expenses from '../fixtures/expenses'
import totalExpenses from '../../selectors/expenses-total';

test('Should render ExpensesSumary with 0 expenses ',()=>{
    const wrapper = shallow(<ExpensesSumary expenseCount={0} expenseTotal={0}/>);
    expect(wrapper).toMatchSnapshot();
});



test('Should render ExpensesSumary with some expenses ',()=>{
    const wrapper = shallow(<ExpensesSumary expenseCount={expenses.length} expenseTotal={totalExpenses(expenses)}/>);
    expect(wrapper).toMatchSnapshot();
});


test('Should render ExpensesSumary with one expense ',()=>{
    const wrapper = shallow(<ExpensesSumary expenseCount={[expenses[0].length]} expenseTotal={expenses[0].amount} />);
    expect(wrapper).toMatchSnapshot();
});

