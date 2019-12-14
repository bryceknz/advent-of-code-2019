const Point = require('./classes/Point')
const Line = require('./classes/Line')

const readInput = require('./readInput')
const processInput = require('./processInput')
const calculateIntersections = require('./calculateIntersections')

readInput()
  .then(processInput)
  .then(calculateIntersections)
  // .then(console.log)
