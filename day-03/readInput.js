const fs = require('fs').promises
const path = require('path')

module.exports = (filename = 'example-input2.txt') => {
  return fs.readFile(path.join(__dirname, filename), 'utf8')
    .then(input => input.split('\n'))
    .then(lines => lines.map(line => line.split(',')))
    .catch(err => err.message)
}
