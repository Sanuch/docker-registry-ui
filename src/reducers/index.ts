import {combineReducers} from 'redux';
import dockerImages from './images';
import dockerTags from './tags';

export default combineReducers({
    images: dockerImages,
    tags: dockerTags
});