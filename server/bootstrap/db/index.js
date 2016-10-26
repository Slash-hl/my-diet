'use strict';

const mongoose = require('mongoose');
const $q = require('q');
const connect = require('./connect');

mongoose.Promise = $q.Promise;

module.exports = connect;
