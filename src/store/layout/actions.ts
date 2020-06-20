import { buildRequestCreator } from 'utils/action';

import dockerClient from "utils/docker";
import { FetchImageActionParameters } from './interfaces';

const NS = '@docker/layout';

export const actionTypes = {
    FETCH_LAYOUTS: `${NS}/FETCH_LAYOUTS`,
    FETCH_TAGS: `${NS}/FETCH_TAGS`,
};

const actions = {
    fetchLayouts: buildRequestCreator(
        actionTypes.FETCH_LAYOUTS,
        ({ request, payload, dispatch }: FetchImageActionParameters) => {
            const { name, tags } = payload;
            debugger
            dispatch(request.request(payload));
            return dockerClient
                .getLayouts(name, tags)
                .then((data) => {
                    const listOfLayouts = data.reduce(
                        (rows: any, {data}) => {
                            return [...rows, {
                                tag: data.tag,
                                rows: data.history.map(
                                    ({v1Compatibility} : any) => JSON.parse(v1Compatibility)
                                )
                            }];
                        },
                        []
                    );
                    dispatch(request.success({layouts: listOfLayouts}));
                })
                .catch(err => dispatch(request.failure(err)))
                .finally( () =>  dispatch(request.done({})) );
        }

    ),
    fetchTags: buildRequestCreator(
        actionTypes.FETCH_TAGS,
        ({ request, payload, dispatch }: FetchImageActionParameters) => {
            const { name } = payload;
            dispatch(request.request(payload));
            return dockerClient
                .getImageTags(name)
                .then(response => response.data)
                .then(({tags}) => {
                    tags = tags ? tags : [];
                    dispatch(request.success({tags: tags ? tags : []}));
                    dispatch(actions.fetchLayouts({ name: name, tags: tags }));
                })
                .catch(err => dispatch(request.failure(err)))
                .finally( () =>  dispatch(request.done({})) );
        }
    ),
};

export default actions;