import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth'




export const Header = ({ startLogout, userImg, userName }) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/dashboard"  >
                    <h1>Expensify </h1>
                </Link>
                <div className="header_userData">
                    <img src={userImg} />
                </div>
                <button className="button-layout button-layout--link" onClick={startLogout}> Logout</button>
            </div>
        </div>
    </header>
);

const mapStateToProps = (state) => ({
    userImg: state.auth.userImg,
    userName: state.auth.userName
});

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);