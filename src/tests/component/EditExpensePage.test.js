import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';


let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
    <EditExpensePage
    startEditExpense={startEditExpense} 
     history={history}  
     startRemoveExpense = {startRemoveExpense}
     expense={expenses[1]}
     />
    );
})

test('Should render EditExpense correctly', () => {

    expect(wrapper).toMatchSnapshot();
});



test('Should render edit', () => {

    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);

    expect(history.push).toHaveBeenLastCalledWith('/dashboard');
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[1].id,expenses[1]);

});

test('Should render remove', () => {
    wrapper.find('button').at(1).simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/dashboard');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({id:expenses[1].id})
});