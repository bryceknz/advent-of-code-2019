const fs = require('fs').promises
const path = require('path')

module.exports = (filename) =>
  fs.readFile(path.join(__dirname, filename), 'utf8')
    .then(input => input.split(','))
    .then(strings => strings.map(string => Number(string)))
