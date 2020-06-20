import axios from 'axios';
import config from "./config";
import {ISetupCache, setupCache} from 'axios-cache-adapter'
import localforage from 'localforage'
// import memoryDriver from 'localforage-memoryStorageDriver'


// localforage.defineDriver(memoryDriver);
const forageStore = localforage.createInstance({
    // List of drivers used
    driver: [
        localforage.INDEXEDDB,
        localforage.LOCALSTORAGE,
        // memoryDriver._driver,
        localforage.WEBSQL,
    ],
    // Prefix all storage keys to prevent conflicts
    name: 'docker-cache'
});

const cache = setupCache({
    maxAge: 600,
    debug: true,
    store: forageStore,
});


const httpRequest = (cache: ISetupCache) => {
    const adapter =  axios.create({
        baseURL: config.backend.url,
        auth: {
            username: config.backend.username,
            password: config.backend.password,
        },
        responseType: "json",
        timeout: 120000,
        withCredentials : true,
        // adapter: cache.adapter,
    });

    // adapter.interceptors.request.use(config => {
    //     // perform a task before the request is sent
    //     console.log('Request was sent', config);
    //
    //     return config;
    // }, error => {
    //     console.error('Request', error);
    //     // handle the error
    //     return Promise.reject(error);
    // });
    //
    // adapter.interceptors.response.use(function (response) {
    //     // Any status code that lie within the range of 2xx cause this function to trigger
    //     // Do something with response data
    //     console.log('Response was received', response);
    //     return response;
    // }, function (error) {
    //     console.error('Response', error);
    //     // Any status codes that falls outside the range of 2xx cause this function to trigger
    //     // Do something with response error
    //     return Promise.reject(error);
    // });

    const headers = {
        // 'Authorization': 'Basic '+btoa(config.backend.username + ':' + config.backend.password),
        'Accept': 'application/json',
    };

    const options = {
        headers,
    } as RequestInit;

    const baseUrl  = 'http://' + config.backend.url;

    return {
        get: (url: string, options?: any) => {
            const fullUrl = baseUrl + url;
            return fetch(fullUrl, options)
                .then((response: Response) => response.json())
            ;
        },
        head: (url: string, options: any) => {
            options = {method: 'head', ...options};
            const fullUrl = baseUrl + url;
            return fetch(fullUrl, options)
                .then((response: Response) => {
                    return response.headers;
                })
            ;
        },
        delete: (url: string, options: any) => {
            options = {method: 'delete', ...options};
            const fullUrl = baseUrl + url;
            return fetch(fullUrl, options)
                .then(response => {
                    console.log(response, response.text());
                    return response;
                });
        }
    };
};

export default httpRequest(cache);