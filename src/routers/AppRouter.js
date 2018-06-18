import React from 'react';
import createHistory from 'history/createBrowserHistory';
import {Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import  ExpenseDashBoardPage  from '../components/ExpenseDashBoardPage';
import  LoginPage  from '../components/LoginPage';
import  AddExpensePage from '../components/AddExpensePage';
import  NotFoundPage from '../components/NotFoundPage';
import  EditExpensePage from '../components/EditExpensePage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import MonthDashbBoardPage from '../components/MonthDashbBoardPage';


export const history = createHistory();

const AppRouter = () => (
    <Router history ={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={ExpenseDashBoardPage} />
                <PrivateRoute path="/month/:yearMonth" component={MonthDashbBoardPage} />
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>

    </Router>
);

export default AppRouter;
