import React from 'react';
import {connect} from 'react-redux';

// description, amount, createdAt
const ExpenseListItem =  ({description, createdAt, amount})=>(
    <div>
        <h3>{description}</h3>
        <p>US$ {amount}, created at {createdAt}</p>
        <button>Remove</button>
    </div>
);


export default connect ()(ExpenseListItem);


