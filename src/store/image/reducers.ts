import { actionTypes } from './actions';
import {ImageReducerInterface, ImageTagResponseInterface, ImageTagListResponseInterface} from './interfaces';

const getInitialState = () => ({
    images: [],
    tags: [] as ImageTagResponseInterface[],
});

const images = (state = getInitialState(), { type, payload }: ImageReducerInterface) => {
    switch (type) {
        case `${actionTypes.FETCH_IMAGES}_SUCCESS`:
            return {
                ...state,
                ...payload,
            };
        case `${actionTypes.FETCH_TAGS}_SUCCESS`:
            const ar = [...payload];
            ar.map(({data}: ImageTagListResponseInterface) =>  state.tags.push(data));
            return state;
        default:
            return state;
    }
};

export default images;
