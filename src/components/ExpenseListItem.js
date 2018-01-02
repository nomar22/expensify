import React from 'react';

// description, amount, createdAt
export default ({description, createdAt, amount})=>(
    <div>
        <h1>{description}</h1>
        <p>{amount}</p>
    </div>
);

