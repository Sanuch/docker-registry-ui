import axios from 'axios';
import config from "./config";
import { setupCache } from 'axios-cache-adapter'
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


const httpRequest = (cache: any) => {
    return axios.create({
        baseURL: config.backend.url,
        // auth: {
        //     username: config.backend.username,
        //     password: config.backend.password
        // },
        timeout: 120000,
        adapter: cache.adapter,
    });
};

export default httpRequest(cache);