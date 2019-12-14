const math = require('mathjs')

const Point = require('./Point')

module.exports = class Line {
  constructor (a, b) {
    this.a = a
    this.b = b
  }

  intersect (otherLine) {
    const intersection = math.intersect(
      this.a.toArray(),
      this.b.toArray(),
      otherLine.a.toArray(),
      otherLine.b.toArray()
    )

    return intersection
      ? new Point(intersection)
      : null
  }

  getPoints () {
    let { x: aX, y: aY } = this.a
    let { x: bX, y: bY } = this.b

    const points = [ this.a.clone() ]

    // Vertical line
    if (aX === bX) {
      if (aY < bY) {
        while (aY < bY) {
          aY++
          points.push(new Point(aX, aY))
        }
      }
      // Horizontal line
    } else if (aY === bY) {
      if (aX < bX) {
        while (aX < bX) {
          aX++
          points.push(new Point(aX, aY))
        }
      }
    }

    return points
  }
}
