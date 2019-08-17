import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/index';
import configureStore from './store/index';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux';

const store = configureStore({});


// const result = require('dotenv').config();

// console.log(result);

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
