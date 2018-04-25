import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import totalExpenses from '../selectors/expenses-total';
import numeral from 'numeral';

export const  ExpensesSumary = ({expenseCount, expenseTotal}) => {
    const expenseWord = expenseCount ===1? 'expense' : 'expenses';
    const formattedTotal = numeral(expenseTotal / 100).format('$0,0.00');
    return (
        <div>
            {
                expenseCount === 0 ?
                    (<p></p>) :
                    (<h1> Viewing {expenseCount} {expenseWord} totaling {formattedTotal} </h1>)


            }
        </div>
    );
};

const mapStateToProps = (state) => {
    const expenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: expenses.length,
        expenseTotal: totalExpenses(expenses)
    }
}


export default connect(mapStateToProps)(ExpensesSumary);