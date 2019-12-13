module.exports = processInput

function processInput (input) {
  const inputCopy = [...input]
  inputCopy.forEach(processInstruction)
  return inputCopy[0]
}

function processInstruction (opcode, index, input) {
  if (index % 4) {
    return
  }

  const lhs = input[index + 1]
  const rhs = input[index + 2]
  const position = input[index + 3]

  switch (opcode) {
    case 1:
      input[position] = input[lhs] + input[rhs]
      break
    case 2:
      input[position] = input[lhs] * input[rhs]
      break
  }
}
