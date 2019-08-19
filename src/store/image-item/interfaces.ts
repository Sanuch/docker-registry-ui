import {Dispatch} from "redux";

export interface ImageReducerInterface {
    type: string,
    payload: any
}

export interface ImageTagResponseInterface {
    name: string,
    tags: Array<string> | null,
}

export interface ResponseInterface {
    config: any,
    data: any,
    headers: any,
    status: number,
    statusText: string,
}

export interface ImageTagListResponseInterface extends ResponseInterface {
    data: ImageTagResponseInterface,
}

export interface FetchImageActionParameters {
    request: any,
    payload: any,
    dispatch: Dispatch,
}