import React from 'react';
import {shallow} from 'enzyme'; 
import {ExpensesSumary} from '../../components/ExpensesSumary';
import expenses from '../fixtures/expenses'

test('Should render ExpensesSumary with 0 expenses ',()=>{
    const wrapper = shallow(<ExpensesSumary expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
});



test('Should render ExpensesSumary with some expenses ',()=>{
    const wrapper = shallow(<ExpensesSumary expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});


test('Should render ExpensesSumary with one expense ',()=>{
    const wrapper = shallow(<ExpensesSumary expenses={[expenses[0]]} />);
    expect(wrapper).toMatchSnapshot();
});

