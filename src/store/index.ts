import { createStore } from 'redux';
import reducer from './reducer';
import middleware from './middleware';

const configureStore = (initialState: any) => {
    return createStore(reducer, initialState, middleware);
};

export default configureStore;