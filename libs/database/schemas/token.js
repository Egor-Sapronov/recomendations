const Schema = require('mongoose').Schema;
const Token = new Schema({
  userId: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  }
});

module.exports = Token;
