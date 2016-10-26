'use strict';

const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const requireDir = require('require-dir');
const simulateLatency = require('express-simulate-latency');
const passport = require('passport');

const bootstrap = require('./bootstrap');
const passportConfig = require('./passport');
const authService = require('./auth/auth.service');
const ensureAuthenticated = require('./auth/auth.service').ensureAuthenticated;

const authRoutes = require('./auth');
const routes = requireDir('./routes', {recurse: true});
const env = require('./../env');

const app = express();

app.use(simulateLatency({min: 100, max: 1000}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: true
}));

passportConfig();

app.use(passport.initialize());
app.use(passport.session());
app.use(authService.initRequest);
app.use(morgan('dev'));

app.use('/api/*', cors());

app.use('/auth', authRoutes);

Object
    .keys(routes)
    .forEach((routeName) => {
        app.use('/api', ensureAuthenticated, routes[routeName]);
    });

module.exports = bootstrap(app);
