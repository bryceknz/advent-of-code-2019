const fileReader = require('./fileReader')
const calculateFuelRequired = require('./calculator')

let totalFuelRequired = 0

fileReader.on('line', (massOfModule) => {
  totalFuelRequired += calculateFuelRequired(Number(massOfModule))
})

fileReader.on('close', () => {
  console.log(`TOTAL FUEL: ${totalFuelRequired}`)
})
