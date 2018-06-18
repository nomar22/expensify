import React from 'react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

// description, amount, createdAt 
export const MonthListItem = ({id, month, amount }) => {
    return (
        <Link className="list-item" to={`/month/${id}`}>
            <h3 className="list-item__title">{month.format('MMMM, YYYY')}</h3>
            <h3 className="list-item__data value">{numeral(amount / 100).format('$0,0.00')}</h3>
        </Link>
    )
};

export default MonthListItem;

