const readInput = require('./readInput')
const processInput = require('./processInput')

readInput('input.txt')
  .then(overwriteInput)
  .then(processInput)
  .then(console.log)

function overwriteInput ([first, , , ...rest]) {
  return [first, 12, 2, ...rest]
}
