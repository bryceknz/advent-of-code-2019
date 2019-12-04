module.exports = {
  initialise,
  update
}

function initialise (input) {
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

function update (references, input) {
  references.opcode.index += 4
  references.first.index += 4
  references.second.index += 4
  references.third.index += 4

  references.opcode.value = input[references.opcode.index]
  references.first.position = input[references.first.index]
  references.second.position = input[references.second.index]
  references.third.position = input[references.third.index]
}
