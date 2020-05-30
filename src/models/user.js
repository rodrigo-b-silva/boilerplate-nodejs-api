const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    passord: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('user', UserSchema);