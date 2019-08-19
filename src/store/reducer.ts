import { combineReducers } from 'redux';

import app from './image/reducers';
import layout from './layout/reducers';
import image from './image/reducers';
import item from './image-item/reducers';

const rootReducer = combineReducers({
    app,
    layout,
    image,
    item,
});

export default rootReducer;
