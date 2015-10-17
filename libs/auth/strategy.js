const UserModel = require('../database/mongoose').UserModel;
const TokenModel = require('../database/mongoose').TokenModel;
const crypto = require('crypto');

function local(username, password, done) {
  return UserModel
            .findOne({ email: username })
            .then(user=> {
              if (!user) {
                return done(null, false);
              }

              if (user.checkPassword(password)) {
                return TokenModel.remove({ userId: user._id }, (err) => {
                  if (err) {
                    return done(err);
                  }
                  const tokenValue = crypto.randomBytes(32).toString('base64');
                  const token = new TokenModel({
                    userId: user._id,
                    value: tokenValue,
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
    .findOne({ value: token })
    .then(tokenResult=> {
      if (!tokenResult) {
        return done(null, false);
      }

      return UserModel
        .findById(tokenResult.userId)
        .then(user=> {
          if (!user) {
            return done(null, false, 'Unknown user');
          }

          return done(null, user);
        });
    });
}

module.exports = {
  local: local,
  bearer: bearer,
  basic: local,
};