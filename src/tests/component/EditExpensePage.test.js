import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';


let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
    <EditExpensePage
     editExpense={editExpense} 
     history={history}  
     removeExpense = {removeExpense}
     expense={expenses[1]}
     />
    );
})

test('Should render EditExpense correctly', () => {

    expect(wrapper).toMatchSnapshot();
});



test('Should render edit', () => {

    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);

    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id,expenses[1]);

});

test('Should render remove', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({id:expenses[1].id})
});