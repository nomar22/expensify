import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import totalExpenses from '../selectors/expenses-total';
import numeral from 'numeral';
import {Link} from 'react-router-dom';

export class ExpensesSumary extends React.Component{


    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       monthExpenses:
    //     };
    // }

    render() {
        const expenseWord = this.props.expenseCount === 1 ? 'expense' : 'expenses';
        const formattedTotal = numeral( this.props.expenseTotal / 100).format('$0,0.00');
        return (
            <div className="page-header">
                <div className="content-container">
                    {
                            (<div>
                                <h1 className="page-header__title"> Viewing <span>{ this.props.expenseCount}</span> of { this.props.leftExpenses} {expenseWord} totaling <span>{formattedTotal} </span></h1>
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
};

const mapStateToProps = (state) => { 
    const expenses = selectExpenses(state.expenses, state.filters);
    const startDate = state.filters.startDate;
    const endDate = state.filters.endDate;
    const generalExpenses = selectExpenses(state.expenses,{endDate,startDate});
    return {
        expenseCount: expenses.length,
        expenseTotal: totalExpenses(expenses),
        leftExpenses: generalExpenses.length
    }
}


export default connect(mapStateToProps)(ExpensesSumary);