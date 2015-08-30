'use strict';

let express = require('express');
let app = express();

app.use('/static', express.static('./web/dist'));
app.set('view engine', 'jade');
app.set('views', './client/templates');

app.get('/', function (req, res) {
	res.render('index');
});

module.exports = app;