import React from 'react';
import {removeExpense} from '../actions/expenses';
import {Link } from 'react-router-dom';
import {connect} from 'react-redux';

// description, amount, createdAt
const ExpenseListItem = ({dispatch, id,description, createdAt, amount})=>(
    <div>
        <h3><Link to={`/edit/${id}`}>{description}</Link></h3>
        <p>US$ {amount}, created at {createdAt}</p>
        <button onClick={()=>{
            dispatch(removeExpense({id}));
        }}  >Remove</button>
    </div>
);

export default connect()(ExpenseListItem);

