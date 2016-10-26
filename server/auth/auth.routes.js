'use strict';

const express = require('express');
const router = express.Router();
const passport = require('passport');
const authController = require('./auth.controller');

router.route('/login')
    .post(passport.authenticate('local'), authController.loginSuccess);

router.route('/google-plus')
    .get(passport.authenticate('google', {
        scope: [
            'https://www.googleapis.com/auth/plus.login',
            'https://www.googleapis.com/auth/plus.profile.emails.read'
        ]
    }));

router.route('/google-plus/callback')
    .get(passport.authenticate('google'), function(req, res, next) {
        if (!req.user) {
            next(new Error('Something went wrong, please try again.'));
        } else {
            res.json({
                success: true,
                user: req.user
            });
        }
    });

/*router.route('/login')
 .post(function (req, res, next) {
 passport.authenticate('local', function (err, user) {
 if (err) {
 return next(err);
 }
 if (!user) {
 return res.sendStatus(401);
 }
 req.logIn(user, function (err) {
 if (err) {
 return next(err);
 }
 return res.sendStatus(200);
 });
 })(req, res, next);
 });*/

router.route('/logout')
    .get(authController.logout);

module.exports = router;
