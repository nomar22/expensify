import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';






const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/dashboard" activeClassName="is-active" > DashBoard /</NavLink>
        <NavLink to="/create" activeClassName="is-active" > Criar /</NavLink>
        <NavLink to="/help" activeClassName="is-active"> Ajuda</NavLink>
    </header>
);

export default Header;