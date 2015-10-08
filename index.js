'use strict';

const app = require('./app');
const database = require('./libs/database/mongoose');

database.init()
    .then(() => {
        console.log('connected to db');
    })
    .catch(err=> console.log(err));

app.listen(process.env.PORT || 3000, () => {
    console.log(`Listen port ${process.env.PORT}`);
});


