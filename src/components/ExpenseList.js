import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem'

const ExpenseList =  (props)=>(
    <div> 
        <h1>ExpenseList</h1>
        Size {props.expenses.length }
        
        <ol>
            {
                props.expenses.map((expense,index)=>(
                    
                    <ExpenseListItem 
                        key={expense}
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

