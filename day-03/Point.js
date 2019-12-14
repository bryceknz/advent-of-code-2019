module.exports = class Point {
  constructor (x, y) {
    const inputIsArray = Array.isArray(x)
    this.x = inputIsArray ? x[0] : x
    this.y = inputIsArray ? x[1] : y
  }

  distance (otherPoint) {
    return Math.abs(this.x - otherPoint.x) + Math.abs(this.y - otherPoint.y)
  }

  toArray () {
    return [ this.x, this.y ]
  }
}
