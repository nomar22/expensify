import React from 'react'; 
import {Link } from 'react-router-dom';

// description, amount, createdAt 
export const ExpenseListItem = ({id,description, createdAt, amount})=>(
    <div>
        <h3><Link to={`/edit/${id}`}>{description}</Link></h3>
        <p>US$ {amount}, created at {createdAt}</p>
    </div>
);

export default ExpenseListItem;

