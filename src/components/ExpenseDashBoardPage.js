import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSumary from './ExpensesSumary';
const ExpenseDashBoardPage = () => (
    <div className="content-container">
        <ExpensesSumary  />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);


export default ExpenseDashBoardPage;