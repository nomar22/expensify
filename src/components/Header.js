import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import {connect } from 'react-redux';
import {startLogout} from '../actions/auth'




export const Header = ({startLogout}) => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" > DashBoard /</NavLink>
        <NavLink to="/create" activeClassName="is-active" > Criar /</NavLink>
        <NavLink to="/help" activeClassName="is-active"> Ajuda</NavLink>
        <button onClick={startLogout}> Logout</button>
    </header>
);

const mapDispatchToProps = (dispatch)=>({
    startLogout:()=>dispatch(startLogout())
});
export default connect(undefined, mapDispatchToProps)(Header);