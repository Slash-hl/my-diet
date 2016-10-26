'use strict';

const loadEnvConfig = require('./load');
const layout = require('./../layout');
const getenv = require('getenv');

loadEnvConfig(layout.envFilePath);

const APP_PORT = getenv.int('APP_PORT', 9000);

module.exports = {
    API_BASE_URL: getenv('API_BASE_URL', `http://localhost:${APP_PORT}`),
    APP_PORT,
    API_PORT: getenv.int('API_PORT', 8080),
    NODE_ENV: getenv('NODE_ENV', 'production'),
    PLATFORM: getenv('PLATFORM', 'web'),
    IS_PRODUCTION: getenv('NODE_ENV') === 'production',
    GOOGLE_CLIENT_ID: getenv('GOOGLE_CLIENT_ID', '1'),
    GOOGLE_CLIENT_SECRET: getenv('GOOGLE_CLIENT_SECRET', '1')
};
