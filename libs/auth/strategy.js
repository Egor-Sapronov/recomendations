const UserModel = require('../database/mongoose').UserModel;
const TokenModel = require('../database/mongoose').TokenModel;
const crypto = require('crypto');

function assignToken(user, facebookToken) {
    return new Promise((resolve, reject) => {
        const tokenValue = facebookToken || crypto.randomBytes(32).toString('base64');
        const token = new TokenModel({
            value: tokenValue,
            _user: user,
        });

        return token.save((error) => {
            if (error) {
                return reject(error);
            }

            return resolve(user);
        });
    });
}

function facebook(accessToken, refreshToken, profile, done) {
    console.log(profile);
    return UserModel
    .findOne({ providerId: profile.id })
    .then(user=> {
        if (!user) {
            const userEntity = new UserModel({
                providerId: profile.id,
                provider: profile.provider,
                profileLink: profile.profileUrl,
                displayName: profile.displayName,
                name: profile._json.name,
                location: profile._json.location ? profile._json.location.name : null,
                email: profile._json.email,
                birthday: profile._json.birthday,
            });

            return userEntity.save(err => {
                if (err) {
                    return done(err);
                }

                return assignToken(userEntity, accessToken)
                .then(result=> {
                    return done(null, result);
                });
            });
        }

        return assignToken(user)
        .then(result=> {
            return done(null, result);
        });
    });
}

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
                    _id: user._id,
                },
            })
            .remove(err=> {
                if (err) {
                    return done(err);
                }

                return assignToken(user)
                .then(result=> {
                    return done(null, result);
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
    facebook: facebook,
};
