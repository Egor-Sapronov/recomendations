const Schema = require('mongoose').Schema;
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
});

Recomendation
  .virtual('imagePath')
  .set(function(filename) {
    this.image = `/api/recomendations/${this.id}/image`;
    this.imageName = filename;
  });

module.exports = Recomendation;
