const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const env = require('./../../env');

const User = require('./../models/user');
const GOOGLE_CLIENT_ID = env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = env.GOOGLE_CLIENT_SECRET;

module.exports = () => {
    passport.use(new GoogleStrategy({
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            callbackURL: `${env.API_BASE_URL}/auth/google-plus/callback`,
            profileFields: ['id', 'displayName', 'photos', 'email']
        },
        function(accessToken, refreshToken, profile, done) {
            User.findOne({ googleId: profile.id })
                .then((user) => {
                    if (user) {
                        // TODO: save last login time
                        console.log('user', user);
                    } else {
                        user = new User();
                        user.googleId = profile.id;
                        user.name = profile.displayName;
                    }
                    return user.save();
                })
                .then((user) => {
                    done(null, user);
                })
                .catch(done);
        }
    ));
};
