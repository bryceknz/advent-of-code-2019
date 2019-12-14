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
}
