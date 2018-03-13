import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { ExpenseDashBoardPage } from '../components/ExpenseDashBoardPage';

//help
export const NotFoundPage = () => (
    <div>
        404 = <Link to="/" >Go home </Link>
    </div>
);

export default NotFoundPage;