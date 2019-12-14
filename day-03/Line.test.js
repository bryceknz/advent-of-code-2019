const Line = require('./Line')
const Point = require('./Point')

describe('Line class tests', () => {
  const pointA = new Point(0, 0)
  const pointB = new Point(10, 10)
  const line = new Line(pointA, pointB)

  it('constructor returns an instance of Line with correct values', () => {
    expect(line instanceof Line).toBeTruthy()
    expect(line.a).toEqual(pointA)
    expect(line.b).toEqual(pointB)
  })

  it('intersect returns correct point of intersection', () => {
    const pointC = new Point(10, 0)
    const pointD = new Point(0, 10)
    const otherLine = new Line(pointC, pointD)

    const intersection = new Point(5, 5)
    const expected = intersection.toArray()

    const actual = line.intersect(otherLine)
    expect(actual).toEqual(expected)
  })
})
