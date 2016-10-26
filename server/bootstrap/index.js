'use strict';

const db = require('./db');
const mongodbUri = require('mongodb-uri');

module.exports = (app) => {
    db(formatMongooseDbUri());
    return app;
};

function formatMongooseDbUri() {
    return mongodbUri.formatMongoose({
        scheme: 'mongodb',
        hosts: [
            {
                host: 'localhost',
                port: '27017'
            }
        ],
        username: '',
        password: '',
        database: 'angular'
    });
}
