function blah (wires) {
  const intersections = []
  let lineA, lineB

  for (let i = 0; i < wires[0].length; i++) {
    for (let j = 0; j < wires[1].length; j++) {
      lineA = wires[0][i]
      lineB = wires[1][j]
      const intersection = lineA.intersect(lineB)
      if (intersection) {
        intersections.push(intersection)
        print(lineA, lineB, intersection)
      }
    }
  }

  return intersections
}

function print (lineA, lineB, intersection) {
  console.log('lineA:', lineA)
  console.log('lineB:', lineB)
  console.log('intersection:', intersection)
}

module.exports = blah
