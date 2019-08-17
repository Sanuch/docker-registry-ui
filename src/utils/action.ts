import {Dispatch} from "redux";

export const buildRequestActionTypes = (type: string, namespace: string) => ({
    [`${type}_REQUEST`]: `${namespace}/${type}_REQUEST`,
    [`${type}_SUCCESS`]: `${namespace}/${type}_SUCCESS`,
    [`${type}_FAILURE`]: `${namespace}/${type}_FAILURE`,
});

export const buildActionCreator = (type: string) => {
    return (payload = {}) => ({
        type,
        payload,
    });
};

const mapTypeToRequest = (type: string) => ({
    request: buildActionCreator(`${type}_REQUEST`),
    success: buildActionCreator(`${type}_SUCCESS`),
    failure: buildActionCreator(`${type}_FAILURE`),
});

export const buildRequestCreator = (type: string, requestCallback: Function): Function => {
    const request = mapTypeToRequest(type);
    return (payload: any = {}) => (dispatch: Dispatch) => requestCallback({ request, payload, dispatch });
};