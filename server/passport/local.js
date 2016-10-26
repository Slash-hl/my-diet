'use strict';

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

module.exports = () => {
    passport.serializeUser((user, done) => done(null, user.id));

    passport.deserializeUser((id, done) => {
        User.findById(id)
            .then((user) => done(null, user))
            .catch(done);
    });

    passport.use(new LocalStrategy(
        function(name, password, done) {
            User.findOne({name})
                .then((user) => {
                    if(user && user.authenticate(password)) {
                        return done(null, user);
                    }
                    return done(null, false);
                })
                .catch(done);
        }
    ));
};





