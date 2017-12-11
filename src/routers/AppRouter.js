import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import  ExpenseDashBoardPage  from '../components/ExpenseDashBoardPage';
import  AddExpensePage from '../components/AddExpensePage';
import  NotFoundPage from '../components/NotFoundPage';
import  HelpPage  from '../components/HelpPage';
import  Header  from '../components/Header';
import  EditExpensePage from '../components/EditExpensePage';



const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashBoardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>

    </BrowserRouter>
);

export default AppRouter;
