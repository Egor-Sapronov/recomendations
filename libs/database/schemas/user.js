const Schema = require('mongoose').Schema;
const User = new Schema({
    providerId: {
        type: String,
        unique: true,
        required: true,
    },
    provider: {
        type: String,
    },
    profileLink: {
        type: String,
    },
    displayName: {
        type: String,
    },
    name: {
        type: String,
    },
    email: {
        type: String,
    },
});

module.exports = User;
