const Schema = require('mongoose').Schema;
const LikeSchema = require('./like');

const Recomendation = new Schema({
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  imageName: {
    type: String,
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  likes: [LikeSchema],
  userId: {
    type: String,
  },
});

Recomendation
  .virtual('imagePath')
  .set(function (filename) {
    this.image = `/api/recomendations/${this.id}/image`;
    this.imageName = filename;
  });

module.exports = Recomendation;
