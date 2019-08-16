import {Dispatch} from "redux";
import dockerClient from "../utils/docker";

import {
    GET_IMAGE_DATA_START,
    GET_IMAGE_DATA_SUCCESS,
    GET_IMAGE_DATA_FAILURE
} from '../constants';

export const select = (image: any) => {
    return {
        type: 'IMAGE_SELECTED',
        payload: image
    };
};

export const getImageListAction = () => (dispath: Dispatch) => {
    dispath({type: GET_IMAGE_DATA_START});
    dockerClient.getList({})
        .then(({data}) => {
            dispath({
                type: GET_IMAGE_DATA_SUCCESS,
                payload: data
            });
        }).catch(error => {
            dispath({
                type: GET_IMAGE_DATA_FAILURE,
                payload: error
            })
        });
};