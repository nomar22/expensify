import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem'

const ExpenseList =  (props)=>(

    <div> 
        <h1>ExpenseList</h1>
        Size {props.expenses.length  }
        
        <ol>
            {
                props.expenses.map((expense)=>(
                    <ExpenseListItem key={expense.id} {...expense}
                    />
                ))
            }
        </ol>
    </div>
);

const mapStateToProps = (state)=>{
    return {
        
        expenses:state.expenses,
        filters: state.filters
    };
};

export default  connect(mapStateToProps)(ExpenseList);

