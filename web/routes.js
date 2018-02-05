import React from 'react';
import {
    Router,
    Route
} from 'react-router';
import createHistory from 'history/createBrowserHistory';
import App from './components/app';
import Hello from './components/hello';

const history = createHistory();

export default () => (
    <Router history={history}>
        <div>
            <Route path='/' component={App}/>
            <Route path="/home" component={Hello}/>
        </div>
    </Router>
);