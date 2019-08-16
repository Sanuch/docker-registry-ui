
const config = {
    backend: {
        username: process.env.BACKEND_USERNAME || '',
        password: process.env.BACKEND_PASSWORD || '',
        url: process.env.BACKEND_URL || 'http://127.0.0.1:5000/v2',
    }
};
export default config;