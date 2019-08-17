import { actionTypes } from './actions';
import {ImageReducerInterface, ImageTagResponseInterface } from './interfaces';

const getInitialState = () => ({
    images: [],
    tags: [] as ImageTagResponseInterface[],
});

const app = (state = getInitialState(), { type, payload }: ImageReducerInterface) => {
    switch (type) {
        case `${actionTypes.FETCH_IMAGES}_SUCCESS`:
            return {
                ...state,
                ...payload,
            };
        case `${actionTypes.FETCH_TAGS}_SUCCESS`:
            return {
                ...state,
                tags: [...state.tags, ...payload]
            };
        default:
            return state;
    }
};

export default app;
