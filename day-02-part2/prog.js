const processInput = require('./processInput')

module.exports = run

function run (input, noun, verb) {
  const newInput = overwriteInput(input, noun, verb)
  return processInput(newInput)
}

function overwriteInput ([first, , , ...rest], noun, verb) {
  return [first, noun, verb, ...rest]
}
