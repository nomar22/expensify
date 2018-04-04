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

test('Should render ExpenseListFilter with alt data correctly', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});


test('Should handle text change',()=>{

});


test('Should sort by date',()=>{

});

test('Should sort by amount',()=>{

});

test('Should handle date     change',()=>{

});


//state
test('Should handle date focus on change',()=>{

});