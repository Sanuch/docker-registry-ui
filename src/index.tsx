import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {StoreContext} from './utils/context';

const storage = (() => {
    let images: Array<any> = [];
    return {
        addImage: (imageName: string) => {
            images.push({name: imageName, tags: {}});
        },
    }
})();

require('dotenv').config();

ReactDOM.render(
    <StoreContext.Provider value={storage} >
        <App />
    </StoreContext.Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
