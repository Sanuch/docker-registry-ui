import axios from 'axios';
import config from "./config";
import { setupCache } from 'axios-cache-adapter'

const cache = setupCache({
    maxAge: 3600,
    debug: true,
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