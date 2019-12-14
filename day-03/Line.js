const math = require('mathjs')

module.exports = class Line {
  constructor (a, b) {
    this.a = a
    this.b = b
  }

  intersect (otherLine) {
    return math.intersect(
      this.a.toArray(),
      this.b.toArray(),
      otherLine.a.toArray(),
      otherLine.b.toArray()
    )
  }
}
