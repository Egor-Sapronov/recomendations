const Schema = require('mongoose').Schema;
const LikeSchema = require('./like');

const Recomendation = new Schema({
    content: {
        type: String,
        required: true,
    },
    linkedContent: {
        type: String,
    },
    image: {
        type: String,
    },
    imageName: {
        type: String,
    },
    data: [],
    _user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    likes: [LikeSchema],
});

Recomendation
    .virtual('imagePath')
    .set(function (filename) {
        this.image = `/api/recomendations/${this.id}/image`;
        this.imageName = filename;
    });

module.exports = Recomendation;
