
//Get sum of expenses
export default (expenses) => {
    return expenses
    .map((expense) => expense.amount)
    .reduce((total, actual)=> total + actual, 0);
   
};