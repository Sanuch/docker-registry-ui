import { actionTypes } from './actions';
import {ImageReducerInterface } from './interfaces';

const getInitialState = () => ({
    name: '',
    tags: [] as Array<string>,
});

const image = (state = getInitialState(), { type, payload }: ImageReducerInterface) => {
    switch (type) {
        case `${actionTypes.FETCH_TAGS}_SUCCESS`:
            return {
                ...state,
                ...payload,
            };
        case `${actionTypes.FETCH_LAYOUTS}_SUCCESS` :
            return {
                ...state,
                ...payload,
            };
        default:
            return state;
    }
};

export default image;
