import { buildRequestCreator } from 'utils/action';

import dockerClient from "utils/docker";
import { FetchImageActionParameters } from './interfaces';

const NS = '@docker/image';

export const actionTypes = {
    FETCH_IMAGES: `${NS}/FETCH_IMAGES`,
    FETCH_TAGS: `${NS}/FETCH_TAGS`,
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
                    dispatch(actions.fetchTags({ images: images }));
                })
                .catch(err => dispatch(request.failure(err)))
                .finally( () =>  dispatch(request.done({})) );
        }
    ),
    fetchTags: buildRequestCreator(
        actionTypes.FETCH_TAGS,
        ({ request, payload, dispatch }: FetchImageActionParameters) => {
            const { images } = payload;
            dispatch(request.request(payload));
            return dockerClient
                .getTags(images)
                .then(response => response.map(item => item.data))
                .then(data => {
                    dispatch(request.success({ images: data }));
                })
                .catch(err => dispatch(request.failure(err)))
                .finally( () =>  dispatch(request.done({})) );
        }
    ),
};

export default actions;