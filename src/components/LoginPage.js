import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';






export class LoginPage extends React.Component {

    render() {
        return (
            <div>
                <h1>Login</h1>

                <input
                    type="text"
                    placeholder="login"
                    autoFocus />
                <input
                    type="text"
                    placeholder="password"
                />
                <button  >Login</button>
            </div>
        )

    }
}

export default LoginPage;