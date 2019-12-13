const fs = require('fs').promises
const path = require('path')

function readFile (filename = 'input.txt') {
  return fs.readFile(path.join(__dirname, filename), 'utf8')
    .then(input => input.split(','))
    .then(strings => strings.map(string => Number(string)))
    .catch(err => err.message)
}

module.exports = readFile
