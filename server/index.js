'use strict';

const env = require('./../env');
const server = require('./server');

server.listen(env.API_PORT, () => console.log(`back: listening on ${env.API_PORT}`));
