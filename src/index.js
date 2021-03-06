import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router } from 'react-router-dom';

import './index.scss';
import App from './components/App';
import configureStore from './configureStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const customHistory = createBrowserHistory();

// const preloadedState = window.__PRELOADED_STATE__;
// delete window.__PRELOADED_STATE__;

// const context = {};
const initialState = {
    loginFailed: 0,
    signupFailed: false,
    updateFailed: false,
    userData: [],
    offerData: [],
    viewData: null,
    token: '',
    offerId: null,
    userAdmin: '',
};

const store = configureStore(initialState);
ReactDOM.render(
    <Provider store={store}>
        <Router history={customHistory}>
            <App />
        </Router>
    </Provider>, 
    document.getElementById('root')
);