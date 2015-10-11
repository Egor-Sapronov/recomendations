const bole = require('bole');

bole.output({
  level: 'info',
  stream: process.stdout,
});

module.exports = bole;
