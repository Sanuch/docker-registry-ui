import {
    GET_IMAGE_DATA_START,
    GET_IMAGE_DATA_SUCCESS,
    GET_IMAGE_DATA_FAILURE
} from '../constants'

export default function() {
    return [
        "sanuch-composer",
        "sanuch-jenkins-php",
        "sanuch-news",
        "sanuch-news-base",
        "sanuch-web-base",
        "sanuch-web-news"
    ];
}
interface ImageListAction {
    type: string,
    payload: Object
}
export const imageInfo = (state: Object, data: ImageListAction) => {
    switch (data.type) {
        case GET_IMAGE_DATA_SUCCESS:
            return {
                ...state,
                images: data.payload
            };
        default:
            return state
    }
};