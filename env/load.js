'use strict';

const dotenv = require('dotenv');
const chalk = require('chalk');

module.exports = loadDotEnv;

function loadDotEnv(envPath) {
    try {
        dotenv.config({
            path: envPath
        });
    } catch (error) {
        if (error.code !== 'ENOENT') {
            throw error;
        }
        console.log(`${chalk.red('[Error]')} Failed to load ${chalk.magenta(envPath)}`);
    }
}
