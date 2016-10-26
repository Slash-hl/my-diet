'use strict';

const mongoose = require('mongoose');
const database = mongoose.connection;

module.exports = (dbUrl) => {
    mongoose.connect(dbUrl);
    database
        .on('connected', () => console.log(`Mongoose default connection open to ${dbUrl}`))
        .on('error', (err) => console.log(`Mongoose default connection error  ${err}`))
        .on('disconnected', () => console.log('Mongoose default connection disconnected'));

    process.on('SIGINT', () => {
        database.close(() => process.exit(0));
    });
};
