import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import totalExpenses from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSumary = (props) => (
    <div>   
        {
            props.expenses.length === 0 ?
            (<p></p>):
            (<p> Viewing {props.expenses.length} {props.expenses.length ===1? 'expense' : 'expenses'} totaling {numeral(totalExpenses(props.expenses)/100).format('$0,0.00')} </p>)


        }
    </div>
);

const mapStateToProps = (state) =>{
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}


export  default  connect (mapStateToProps)(ExpensesSumary);