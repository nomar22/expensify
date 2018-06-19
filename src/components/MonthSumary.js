import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import totalExpenses from '../selectors/expenses-total';
import selectMonths from '../selectors/months';
import numeral from 'numeral';
import {Link} from 'react-router-dom';

export const ExpensesSumary = ({ expenseTotal, months}) => {
    const formattedTotal = numeral(expenseTotal / 100).format('$0,0.00');
    const formattedAverage = numeral(expenseTotal / 100/months.length).format('$0,0.00');
    return (
        <div className="page-header">
            <div className="content-container">
                {
                        (<div>
                            <h1 className="page-header__title"> Total <span>{formattedTotal}</span> average amount  <span>US$ {formattedAverage}  </span>/month</h1>
                            <div className="page-header__actions">
                                <Link className="button-layout" to="create">Add Expense </Link>
                            </div>
                        </div>
                        )


                }
            </div>
        </div>
    );
};

const mapStateToProps = (state) => { 
    const expenses = selectExpenses(state.expenses, {});
    return {
        expenseTotal: totalExpenses(expenses),
        months: selectMonths(state.expenses, state.filters),
    }
}


export default connect(mapStateToProps)(ExpensesSumary);