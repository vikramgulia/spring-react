import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import store from './store';
import {Provider} from 'react-redux';
import {checkSecurity} from "./actions/index";

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/App';

store.dispatch(checkSecurity());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root')
);

registerServiceWorker();