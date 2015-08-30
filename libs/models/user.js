'use strict';

let crypto = require('crypto');

module.exports = function (sequelize, DataTypes) {
	return sequelize.define('User', {
		email: {
			type: DataTypes.STRING
		},
		password_hash: {
			type: DataTypes.STRING
		},
		salt: {
			type: DataTypes.STRING
		},
		password: {
			type: DataTypes.VIRTUAL,
			set: function (password) {
				this.setDataValue('password', password);
				let salt = crypto.randomBytes(32).toString('base64');
				this.setDataValue('salt', salt);
				this.setDataValue('password_hash', this.encryptPassword(password));
			}
		}
	},
		{
			instanceMethods: {
				encryptPassword: function (password) {
					return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
				},
				checkPassword: function(password){
					let hash = crypto.createHmac('sha1', this.salt).update(password).digest('hex');
					
					return this.password_hash === hash;
				}
			}
		});
}