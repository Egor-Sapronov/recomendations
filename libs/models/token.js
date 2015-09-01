'use strict';

let crypto = require('crypto');

module.exports = function (sequelize, DataTypes) {
	return sequelize.define('Token', {
		value: {
			type: DataTypes.STRING
		}
	}, {
			hooks: {
				beforeCreate: function (token, options) {
					token.value = crypto.randomBytes(32).toString('base64');
				}
			}
		});
};