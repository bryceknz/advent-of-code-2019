const prog = require('./prog')

doStuff()
  .then(console.log)

async function doStuff () {
  for (let noun = 0; noun <= 99; noun++) {
    for (let verb = 0; verb <= 99; verb++) {
      const output = await prog(noun, verb)

      if (output === 19690720) {
        console.log('It worked!!!')
        return { noun, verb }
      }
    }
  }
}
