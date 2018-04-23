import moment from 'moment';

//GetVisible Expenses
export default (expenses) => {
    if(expenses === undefined  || expenses.length == 0){
        return 0;
    }
    return expenses.reduce((total, actual)=>({amount:total.amount + actual.amount})).amount;
};