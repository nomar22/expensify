import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import expenses from '../fixtures/expenses';
import { filters, altFilters } from '../fixtures/filters';
import { wrap } from 'module';



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
    const value = altFilters.date;
    wrapper.find('input').at(0).simulate('change',{
        target: {value}
    });
    expect(setTextFilters).toHaveBeenLastCalledWith(value);

});


test('Should sort by date',()=>{
    const sortBy = filters.sortBy;
    wrapper.find('select').simulate('change', {
        target:{value: sortBy}
    });

    expect(sortByDate).toHaveBeenCalled();


});

test('Should sort by amount',()=>{
   const sortBy = altFilters.sortBy;
    wrapper.find('select').simulate('change', {
        target:{value: sortBy}
    });

    expect(sortByAmount).toHaveBeenCalled();
    
});

test('Should handle date  change',()=>{
    const date = filters.date;
     console.log(wrapper.find('withStyles(DateRangePicker)'))//.prop('onDateChange')(date,undefined);
    // expect(setStartDate).toHaveBeenLastCalledWith(date);

});


//state
test('Should handle date focus on change',()=>{

});