'use strict';

const crypto = require('crypto');
const Schema = require('mongoose').Schema;

const User = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  hashedPassword: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
    require: true,
  },
});

User.methods.encryptPassword = function(password) {
  return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
};

User.methods.checkPassword = function(password) {
  return this.encryptPassword(password) === this.hashedPassword;
};

User
  .virtual('password')
  .set(function(password) {
    this._plainPassword = password;
    this.salt = crypto.randomBytes(32).toString('base64');
    this.hashedPassword = this.encryptPassword(password);
  })
  .get(function() {
    return this._plainPassword;
  });

module.exports = User;
