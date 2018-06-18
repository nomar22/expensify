import React from 'react';
import MonthList from './MonthList';
import ExpensesSumary from './ExpensesSumary';
const ExpenseDashBoardPage = () => (
    <div >
        <ExpensesSumary  />
        <MonthList />
    </div>
);


export default ExpenseDashBoardPage;