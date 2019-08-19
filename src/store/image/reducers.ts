import { actionTypes } from './actions';
import {ImageReducerInterface } from './interfaces';

const getInitialState = () => ({
    images: [],
});

const app = (state = getInitialState(), { type, payload }: ImageReducerInterface) => {
    switch (type) {
        case `${actionTypes.FETCH_TAGS}_SUCCESS`:
            return {
                ...state,
                ...payload,
            };
        default:
            return state;
    }
};

export default app;
