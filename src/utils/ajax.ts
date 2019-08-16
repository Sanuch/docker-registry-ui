import axios from 'axios';
import config from "./config";

const httpRequest = () => {
    return axios.create({
        baseURL: config.backend.url,
        // auth: {
        //     username: config.backend.username,
        //     password: config.backend.password
        // },
        timeout: 120000,
    });
};

export default httpRequest();