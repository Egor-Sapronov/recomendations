const Schema = require('mongoose').Schema;
const Like = new Schema({
  value: {
    type: Boolean,
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = Like;
