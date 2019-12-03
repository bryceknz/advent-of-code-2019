const fs = require('fs').promises

readInput('input.txt')
  .then(([first, , , ...rest]) => [first, 12, 2, ...rest])
  .then(processInput)
  .then(console.log)

function readInput (file) {
  return fs.readFile(file, 'utf8')
    .then(input => input.split(','))
    .then(strings => strings.map(string => Number(string)))
}

function processInput (input) {
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

function initialiseReferences (input) {
  const opcode = { index: 0 }
  opcode.value = input[opcode.index]

  const first = { index: 1 }
  first.position = input[first.index]

  const second = { index: 2 }
  second.position = input[second.index]

  const third = { index: 3 }
  third.position = input[third.index]

  const references = { opcode, first, second, third }
  return references
}

function updateReferences (references, input) {
  references.opcode.index += 4
  references.first.index += 4
  references.second.index += 4
  references.third.index += 4

  references.opcode.value = input[references.opcode.index]
  references.first.position = input[references.first.index]
  references.second.position = input[references.second.index]
  references.third.position = input[references.third.index]
}
