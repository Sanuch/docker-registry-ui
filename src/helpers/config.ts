require('dotenv').config();

const config = {
    backend: {
        username: process.env.BACKEND_USERNAME || '',
        password: process.env.BACKEND_PASSWORD || '',
        url: process.env.BACKEND_URL || '',
    }
};

export default config;