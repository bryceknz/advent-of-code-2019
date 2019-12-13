const readInput = require('./readInput')
const processInput = require('./processInput')

module.exports = (noun, verb) => {
  return readInput('input.txt')
    .then((input) => overwriteInput(input, noun, verb))
    .then(processInput)
}

function overwriteInput ([first, , , ...rest], noun, verb) {
  return [first, noun, verb, ...rest]
}
