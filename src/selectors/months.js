import moment from 'moment';

//GetVisible Expenses
export default (expenses) => {

    let result = [];

    expenses.reduce((res, expense) => {
        if (!res) {
            res = [];
        }
        const createdAtMoment = moment(expense.createdAt);
        let month = createdAtMoment.month() + 1;
        let year = createdAtMoment.year();
        if (!res[month]) {
            res[month] = {
                id: year+""+month,
                month: createdAtMoment,
                amount: 0

            }
            result.push(res[month]);
        }
        res[month].amount += expense.amount;
        return res;


    }, undefined);
    return result.sort((a, b) => {
        return a.month < b.month ? 1 : -1;
    });
};