const UserModel = require('../database/mongoose').UserModel;
const TokenModel = require('../database/mongoose').TokenModel;
const crypto = require('crypto');

function local(username, password, done) {
  return UserModel
    .findOne({
      email: username,
    })
    .then(user => {
      if (!user) {
        return done(null, false);
      }

      if (user.checkPassword(password)) {
        return TokenModel
          .find()
          .populate({
            path: '_user',
            match: {
              _id: user._id
            }
          })
          .remove(err=>{
            if(err) {
              return done(err);
            }

            const tokenValue = crypto.randomBytes(32).toString('base64');
            const token = new TokenModel({
              value: tokenValue,
              _user: user,
            });

            return token.save((error) => {
              if (error) {
                return done(error);
              }

              return done(null, user);
            });
          });
      }

      return done(null, false);
    });
}

function bearer(token, done) {
  return TokenModel
    .findOne({
      value: token,
    })
    .populate('_user')
    .then(tokenResult => {
      if (!tokenResult) {
        return done(null, false);
      }

      return done(null, tokenResult._user);
    });
}

module.exports = {
  local: local,
  bearer: bearer,
  basic: local,
};
