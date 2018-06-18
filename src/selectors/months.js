import moment from 'moment';

//GetVisible Expenses
export default (expenses) => {

    let result = [];


    expenses.reduce((res, expense) => {
        const createdAtMoment = moment(expense.createdAt);
        let month = createdAtMoment.month() + 1;
        let year = createdAtMoment.year();

        if (!res[month]) {
            res[month] = {
                id: createdAtMoment,
                month: createdAtMoment.format('MMMM - YYYY'),
                amount: 0

            }
            result.push(res[month]);
        }
        res[month].amount += expense.amount;
        return res;


    });
    return result;
};