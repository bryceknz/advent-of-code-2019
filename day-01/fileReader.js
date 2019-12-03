const fs = require('fs')
const readline = require('readline')

module.exports = readline.createInterface({
  input: fs.createReadStream('input.txt'),
  output: process.stdout,
  console: false
})
