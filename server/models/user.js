const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    name: {
        type: String,
        required: true
    },
    googleId: {
        type: String,
        index: true
    },
    password: {
        type: String
    }
});

User.methods = {
    authenticate(enteredPassword) {
        // TODO: Secure password checking
        return enteredPassword === this.password;
    }
};

module.exports = mongoose.model('User', User);
