import { actionTypes } from './actions';
import {ImageReducerInterface } from './interfaces';

const getInitialState = () => ({
    tags: [],
    name: '',
});

const item = (state = getInitialState(), { type, payload }: ImageReducerInterface) => {
    switch (type) {
        case `${actionTypes.FETCH_IMAGE_TAGS}_SUCCESS`:
            return {
                ...state,
                ...payload,
            };
        default:
            return state;
    }
};

export default item;
