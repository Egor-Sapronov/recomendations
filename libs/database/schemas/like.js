const Schema = require('mongoose').Schema;
const Like = new Schema({
  value: {
    type: Boolean,
  },
  _recomendation: {
    type: Schema.Types.ObjectId,
    ref: 'Recomendation',
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = Like;
