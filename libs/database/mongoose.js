const mongoose = require('mongoose');

const UserSchema = require('./schemas/user');
const TokenSchema = require('./schemas/token');
const RecomendationSchema = require('./schemas/recomendation');

const UserModel = mongoose.model('User', UserSchema);
const TokenModel = mongoose.model('Token', TokenSchema);
const RecomendationModel = mongoose.model('Recomendation', RecomendationSchema);

const db = mongoose.connection;

function initDb() {
  return new Promise((resolve, reject) => {
    mongoose.connect(process.env.DATABASE_URL);

    db.on('error', err=> reject(err));
    db.on('open', () => {
      if (process.env.NODE_ENV === 'production') {
        mongoose.connection.db.dropDatabase(err=> { });
      }
      return resolve(db);
    });
  });
}

module.exports = {
  db: db,
  init: initDb,
  UserModel: UserModel,
  TokenModel: TokenModel,
  RecomendationModel: RecomendationModel,
};
