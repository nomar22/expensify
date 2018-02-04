import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
const expenses = [{
    id: '1',
    description: 'gun',
    note: '',
    amount: 150,
    createdAt: 1
},
{
    id: '2',
    description: 'car',
    note: '',
    amount: 100,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},
{
    id: '3',
    description: 'rent',
    note: '',
    amount: 1500,
    createdAt: moment(0).add(3, 'days').valueOf()
},

{
    id: '4',
    description: 'gas',
    note: '',
    amount: 30,
    createdAt: 350
}

];

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