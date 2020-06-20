import { buildRequestCreator } from 'utils/action';

import dockerClient from "utils/docker";
import { FetchImageActionParameters } from './interfaces';

const NS = '@docker/image-item';

export const actionTypes = {
    FETCH_IMAGE_TAGS: `${NS}/FETCH_IMAGE_TAGS`,
};

const actions = {
    fetchTags: buildRequestCreator(
        actionTypes.FETCH_IMAGE_TAGS,
        ({ request, payload, dispatch }: FetchImageActionParameters) => {
            const { name } = payload;
            dispatch(request.request(payload));
            return dockerClient
                .getImageTags(name)
                .then(response => response)
                .then(({tags}) => {
                    tags = tags ? tags : [];
                    dispatch(request.success({name: name, tags: tags ? tags : []}));
                })
                .catch(err => dispatch(request.failure(err)))
                .finally( () =>  dispatch(request.done({})) );
        }
    ),
};

export default actions;