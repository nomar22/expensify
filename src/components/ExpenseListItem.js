import React from 'react';
import {removeExpense} from '../actions/expenses';
import {connect} from 'react-redux';

// description, amount, createdAt
const ExpenseListItem = ({dispatch, id,description, createdAt, amount})=>(
    <div>
        <h3>{description}</h3>
        <p>ID- {id}</p>
        <p>US$ {amount}, created at {createdAt}</p>
        <button onClick={()=>{
            dispatch(removeExpense({id}));
        }}  >Remove</button>
    </div>
);

export default connect()(ExpenseListItem);

