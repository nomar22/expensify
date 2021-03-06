
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';
import {login, logout} from '../src/actions/auth';
import {startSetExpenses} from '../src/actions/expenses';
const store = configureStore();


// });

const jsx = (
    <Provider store={store} >
        <AppRouter />
    </Provider>
);

let hasHendered = false;
const renderApp = ()=>{
    if(!hasHendered){
        ReactDOM.render(jsx, document.getElementById('app'));
        hasHendered = true;
    }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));



firebase.auth().onAuthStateChanged((user) => {
        
    if (user) {
        store.dispatch(login(user.uid,user.displayName, user.photoURL));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if(history.location.pathname === '/'){
                history.push('/dashboard');
            }
        });
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});
