import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem'
import selectMonths from '../selectors/months';
import { MonthListItem } from './MonthListItem';


export const ExpenseList = (props) => (

    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Month</div>
            <div className="show-for-desktop"> Month</div>
            <div className="show-for-desktop"> Sum</div>
        </div>
        <div className="list-table">
            {
                props.months.length === 0 ?
                    (
                        <div className="list-item list-item--message">
                            <span>  No expenses </span>
                        </div>

                    ) :
                    ( 
                        props.months.map((month) => (
                            <MonthListItem key={month.id} {...month}
                            />
                        ))
                    )
            }
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {

        months: selectMonths(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);

