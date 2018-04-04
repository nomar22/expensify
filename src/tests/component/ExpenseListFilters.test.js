import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import expenses from '../fixtures/expenses';
import { filters, altFilters } from '../fixtures/filters';



let setTextFilters, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilters = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(<ExpenseListFilters
         filters={filters}
         setTextFilter={setTextFilters}
         sortByDate= {sortByDate}
         sortByAmount ={sortByAmount}
         setStartDate={setStartDate}
         setEndDate= {setEndDate}/>);
});

test('Should render ExpenseListFilter correctly', () => {

    expect(wrapper).toMatchSnapshot();
});



test('Should render edit', () => {

    // // wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);

    // expect(history.push).toHaveBeenLastCalledWith('/');
    // expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id,expenses[1]);

});

test('Should render remove', () => {
    // wrapper.find('button').simulate('click');
    // expect(history.push).toHaveBeenLastCalledWith('/');
    // expect(removeExpense).toHaveBeenLastCalledWith({id:expenses[1].id})
});