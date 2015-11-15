const Schema = require('mongoose').Schema;
const LikeSchema = require('./like');
const moment = require('moment');

const Recomendation = new Schema({
    content: {
        type: String,
        required: true,
    },
    data: [],
    _user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    likes: [LikeSchema],
}, {
    toObject: {
        virtuals: true,
    },
    toJSON: {
        virtuals: true,
    },
});

Recomendation
    .virtual('displayDate')
    .get(function() {
        return moment(this.createdAt).calendar();
    });

Recomendation
    .virtual('weight')
    .get(function() {
        return this.likesCount === 0 ?  0 : this.dislikesCount === 0 ? this.likesCount : this.likesCount / this.dislikesCount;
    });

Recomendation
    .virtual('dislikesCount')
    .get(function() {
        return this.likes.reduce((count, like) => like.value ? count : count += 1, 0);
    });

Recomendation
    .virtual('likesCount')
    .get(function() {
        return this.likes.reduce((count, like) => like.value ? count += 1 : count, 0);
    });

module.exports = Recomendation;
