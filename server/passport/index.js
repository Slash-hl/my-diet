'use strict';

const local = require('./local');
const googlePlus = require('./google-plus');

module.exports = () => {
    local();
    googlePlus();
};
