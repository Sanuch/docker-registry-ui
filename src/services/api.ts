import axios, {AxiosBasicCredentials, AxiosInstance} from 'axios';

// Default API will be your root
const API_ROOT = process.env.URL || 'http://localhost:5000/v2';
const TIMEOUT = 20000;
const HEADERS = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
};

class ApiService {
    private client: AxiosInstance;
    constructor({ baseURL = API_ROOT, timeout = TIMEOUT, headers = HEADERS, auth = {} }) {
        const client = axios.create({
            baseURL,
            timeout,
            headers,
            // auth,
        });

        client.interceptors.response.use(ApiService.handleSuccess, ApiService.handleError);
        this.client = client;
    }

    static handleSuccess(response: any) {
        return response;
    }

    static handleError(error: any) {
        return Promise.reject(error);
    }

    get(path: string) {
        return this.client.get(path).then(response => response.data);
    }

    post(path: string, payload?: Object) {
        return this.client.post(path, payload).then(response => response.data);
    }

    put(path: string, payload?: Object) {
        return this.client.put(path, payload).then(response => response.data);
    }

    patch(path: string, payload?: Object) {
        return this.client.patch(path, payload).then(response => response.data);
    }

    delete(path: string) {
        return this.client.delete(path).then(response => response.data);
    }
}

export default ApiService;