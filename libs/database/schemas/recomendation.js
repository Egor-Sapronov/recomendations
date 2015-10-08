'use strict';

const Schema = require('mongoose').Schema;

const Recomendation = new Schema({
    content: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

module.exports = Recomendation;
