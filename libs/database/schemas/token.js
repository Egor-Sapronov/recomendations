const Schema = require('mongoose').Schema;
const Token = new Schema({
  value: {
    type: String,
    required: true,
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
});

module.exports = Token;
