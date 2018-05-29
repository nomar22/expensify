import React from 'react';
import {shallow} from 'enzyme';
import { LoginPage } from '../../components/LoginPage';
import { wrap } from 'module';

// // 

let startLogin, wrapper;
beforeEach(()=>{
    startLogin = jest.fn();
    wrapper = shallow(<LoginPage startLogin={startLogin}/>);
});

test('Should render LoginPage correctly', ()=>{
    expect(wrapper).toMatchSnapshot();
});

test('Should call startlogin on click',()=>{
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});


