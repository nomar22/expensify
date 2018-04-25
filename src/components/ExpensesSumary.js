import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import totalExpenses from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSumary = (props) => {
    const expenseWord = props.expenses.length ===1? 'expense' : 'expenses';
    return (
        <div>
            {
                props.expenses.length === 0 ?
                    (<p></p>) :
                    (<h1> Viewing {props.expenses.length} {expenseWord} totaling {numeral(totalExpenses(props.expenses) / 100).format('$0,0.00')} </h1>)


            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}


export default connect(mapStateToProps)(ExpensesSumary);