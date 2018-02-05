import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('Should Sort By date', () => {
    const filters = {
        sortBy: 'date',
         text:''
    }

    const result = selectExpenses(expenses, filters);

    expect(result).toEqual(
        [
            expenses[2], expenses[3], expenses[0], expenses[1]]
    );


});

test('Should Sort By amount', () => {
    const filters = {
        sortBy: 'amount',
         text:''
    }

    const result = selectExpenses(expenses, filters);

    expect(result).toEqual(
        [
            expenses[2], expenses[0], expenses[1], expenses[3]]
    );


});

test('Should filter by text value', () => {
    const filters = {
        text: 'a',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([
        expenses[3], expenses[1]
    ]);
});

test('Should filter by start and end Date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: moment(0)

    };

    const result = selectExpenses(expenses, filters);


    expect(result).toEqual([expenses[3], expenses[0]]);


});