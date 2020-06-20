
const config = {
    backend: {
        username: process.env.REACT_APP_BACKEND_USERNAME || '',
        password: process.env.REACT_APP_BACKEND_PASSWORD || '',
        url: process.env.REACT_APP_BACKEND_URL || 'http://127.0.0.1:5000/v2',
    }
};
export default config;