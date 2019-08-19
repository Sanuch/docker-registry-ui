import { buildRequestCreator } from 'utils/action';

import dockerClient from "utils/docker";
import { FetchImageActionParameters } from './interfaces';

const NS = '@docker/image';

export const actionTypes = {
    FETCH_IMAGES: `${NS}/FETCH_IMAGES`,
};

const actions = {
    fetchImages: buildRequestCreator(
        actionTypes.FETCH_IMAGES,
        ({ request, payload, dispatch }: FetchImageActionParameters) => {
            dispatch(request.request(payload));
            return dockerClient
                .getList({})
                .then(({ data }) => data.repositories)
                .then(images => {
                    dispatch(request.success({ images: images }));
                })
                .catch(err => dispatch(request.failure(err)))
                .finally( () =>  dispatch(request.done({})) );
        }
    ),
};

export default actions;