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
    .virtual('likesCount')
    .get(function() {
        return this.likes.reduce((count, like) => {
            if (like.value === true) {
                count += 1;
            }
            return count;
        }, 0);
    });

module.exports = Recomendation;
