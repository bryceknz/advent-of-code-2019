const initialiseReferences = require('./references').initialise
const updateReferences = require('./references').update

module.exports = (input) => {
  const references = initialiseReferences(input)

  const { opcode, first, second, third } = references

  while (opcode.value !== 99) {
    if (opcode.value === 1) {
      input[third.position] = input[first.position] + input[second.position]
    } else if (opcode.value === 2) {
      input[third.position] = input[first.position] * input[second.position]
    }
    updateReferences(references, input)
  }
  return input[0]
}
