import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import totalExpenses from '../selectors/expenses-total';
import numeral from 'numeral';
import {Link} from 'react-router-dom';

export const ExpensesSumary = ({ expenseCount, expenseTotal, leftExpenses }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedTotal = numeral(expenseTotal / 100).format('$0,0.00');
    return (
        <div className="page-header">
            <div className="content-container">
                {
                        (<div>
                            <h1 className="page-header__title"> Viewing <span>{expenseCount}</span> of {leftExpenses} {expenseWord} totaling <span>{formattedTotal} </span></h1>
                            <div className="page-header__actions">
                                <Link className="button-layout" to="/create">Add Expense </Link>
                            </div>
                        </div>
                        )


                }
            </div>
        </div>
    );
};

const mapStateToProps = (state) => { 
    const expenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: expenses.length,
        expenseTotal: totalExpenses(expenses),
        leftExpenses: state.expenses.length
    }
}


export default connect(mapStateToProps)(ExpensesSumary);