import React from 'react';
import {shallow} from 'enzyme';
import {Header} from '../../components/Header';
import { wrap } from 'module';

// // 
let startLogout, wrapper;
beforeEach(()=>{
    startLogout = jest.fn();
    wrapper = shallow(<Header startLogout={startLogout} />);
});

test('Should render Header correctly', ()=>{
    expect(wrapper).toMatchSnapshot();
});


test('Should call startLogout on button click',()=>{
    wrapper.find('button').simulate('click');

    expect(startLogout).toHaveBeenCalled();


});

// should call startlogout
//  loginPage test file ->should call start login on button click

// spies