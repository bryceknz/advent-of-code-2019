const prog = require('./prog')
const readInput = require('./readInput')

readInput()
  .then(bruteForce)
  .then(console.log)

async function bruteForce (input) {
  for (let noun = 0; noun <= 99; noun++) {
    for (let verb = 0; verb <= 99; verb++) {
      const output = await prog(input, noun, verb)

      if (output === 19690720) {
        console.log('It worked!!!')
        return { noun, verb }
      }
    }
  }
}
