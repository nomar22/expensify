import moment from 'moment';

//GetVisible Expenses
export default (expenses, { text="", sortBy, startDate, endDate, category }) => {

    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);


        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        const categoryMatch = category? expense.category === category: true;

        



        return startDateMatch && endDateMatch && textMatch && categoryMatch;
        //  ;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};