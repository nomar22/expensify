
//GetVisible Expenses
export default (expenses) => {
    if(expenses === undefined  || expenses.length == 0){
        return 0;
    }
    return expenses
    .map((expense) => expense.amount)
    .reduce((total, actual)=> total + actual);
};