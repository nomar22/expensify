import React from 'react'; 
import {Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

// description, amount, createdAt 
export const ExpenseListItem = ({id,description, createdAt, amount})=>(
    <div>
        <h3><Link to={`/edit/${id}`}>{description}</Link></h3>
        <p>
            US$ {numeral(amount /100).format('$0,0.00') } 
            - 
            created at { moment(createdAt).format('MMMM Do, YYYY')}
        </p>
    </div>
);

export default ExpenseListItem;

