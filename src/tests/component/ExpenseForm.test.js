import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses'


test('Should render default ExpenseForm correctly',()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseForm with expense data',()=>{
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission',()=>{
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('form').simulate('submit',{
         preventDefault:()=>{}
        });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
    
});


test('should set descritpion on input change',()=>{
    const value = 'New Description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change',{
        target: {value}
    });

    expect(wrapper.state('description')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('Should set note textChange', ()=>{
    const value = 'Add Description';
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('textarea').simulate('change',{
        target:{value}
    });

    expect(wrapper.state('note')).toBe(value);
    expect(wrapper).toMatchSnapshot();

});

test('Should set valid amount', ()=>{
    const value = "55.30";
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    });

    expect(wrapper.state('amount')).toBe(value);
    expect(wrapper).toMatchSnapshot();

});

test('Should reject invalid amount', ()=>{
    const value = "55.3030";
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    });

    expect(wrapper.state('amount')).toBe("");
    expect(wrapper).toMatchSnapshot();

});

test('Should call onSubmit prop for valid submissions',()=>{
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);

    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
       });

    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description:expenses[0].description,
        amount:expenses[0].amount,
        note:expenses[0].note,
        createdAt:expenses[0].createdAt
    });

});