import filterReducer from '../../reducers/filters';
import moment from 'moment';

test('Should set up default filter values', () => {
    const state = filterReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')

    });

});

test('Should be sortBy to amount', () => {
    const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set Sortby to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount'
    };

    const action = { type: 'SORT_BY_DATE' };

    const state = filterReducer(currentState, action);

    expect(state.sortBy).toBe('date');
});


//should set text filter
test('Should set text filter', () => {
    const text = 'Rafael';
    const state = filterReducer(undefined, { type: 'SET_TEXT_FILTER', text });

    expect(state.text).toBe(text);


});


//should set startdatefilter 
test('Should set startDate filter', () => {
    const state = filterReducer(undefined, { type: 'SET_START_DATE', startDate:moment(0) });

    expect(state.startDate).toEqual(moment(0));


});



//should set enddatefilter
test('Should set endDate filter', () => {
    const state = filterReducer(undefined, { type: 'SET_END_DATE', endDate:moment(0) });

    expect(state.endDate).toEqual(moment(0));


});
