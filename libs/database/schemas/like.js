const Schema = require('mongoose').Schema;
const Like = new Schema({
  value: {
    type: Boolean,
  },
  recomendationId: {
    type: String,
  },
  userId: {
    type: String,
  },
});

module.exports = Like;
