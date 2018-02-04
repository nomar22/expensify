import {setStartDate, setEndDate,sortByAmount, sortByDate,setTextFilter} from '../../actions/filters';
import moment from 'moment';


test('Should generate set Start date action object', ()=>{
    const action = setStartDate(moment(0));

    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate:moment(0)
    });

});



test('Should generate set End date action object', ()=>{
    const action = setEndDate(moment(0));

    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate:moment(0)
    });
});

test('Should set generate sortByDate action object',()=>{
    const action = sortByDate();

    expect(action).toEqual({
        type:'SORT_BY_DATE'
    });
});


test('Should set generate sortByAmount action object',()=>{
    const action = sortByAmount();

    expect(action).toEqual({
        type:'SORT_BY_AMOUNT'
    });
});

test('Should set generate setTextFilter action object',()=>{
    const action = setTextFilter('BILL');
    const text = 'BILL';
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text
    });
});


test('Should set generate setTextFilter action object with default value',()=>{
    const action = setTextFilter();
    const text = '';
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text
    });
});