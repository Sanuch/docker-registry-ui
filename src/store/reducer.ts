import { combineReducers } from 'redux';

import images from './image/reducers';

const rootReducer = combineReducers({
    images
});

export default rootReducer;
