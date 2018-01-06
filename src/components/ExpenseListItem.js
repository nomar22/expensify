import React from 'react';

// description, amount, createdAt
export default ({description, createdAt, amount})=>(
    <div>
        <h3>{description}</h3>
        <p>US$ {amount}, created at {createdAt}</p>
        <button>Remove</button>
    </div>
);

