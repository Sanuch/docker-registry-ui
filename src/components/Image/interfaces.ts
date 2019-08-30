
import { RouteComponentProps } from 'react-router-dom';

interface RouteInfo {
    image: string;
}

export interface ImageProps extends RouteComponentProps<RouteInfo> {
    fetchLayouts: Function,
    fetchTags: Function,
    image: string,
    tags: Array<string>
    layouts: Array<any>,
}

export interface ImageStates {
}