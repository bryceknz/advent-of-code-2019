const Point = require('./classes/Point')
const Line = require('./classes/Line')

module.exports = processInput

function processInput (input) {
  return input.map(instructions =>
    createLines(instructions)
  )
}

function createLines (input) {
  let currentPoint = new Point(0, 0)

  return input.map(instruction => {
    const direction = instruction[0]
    const magnitude = Number(instruction.slice(1))

    const newPoint = createNewPoint(currentPoint, direction, magnitude)
    const line = createNewLine(currentPoint, newPoint)
    currentPoint = newPoint
    // console.log(line)
    return line
  })
}

function createNewPoint (currentPoint, direction, magnitude) {
  const newPoint = currentPoint.clone()
  newPoint.shift(direction, magnitude)
  return newPoint
}

function createNewLine (currentPoint, newPoint) {
  return new Line(currentPoint, newPoint)
}
