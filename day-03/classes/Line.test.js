const Line = require('./Line')
const Point = require('./Point')

describe('Line class tests', () => {
  const pointA = new Point(0, 0)
  const pointB = new Point(4, 0)
  const line = new Line(pointA, pointB)

  it('constructor returns an instance of Line with correct values', () => {
    expect(line instanceof Line).toBeTruthy()
    expect(line.a).toEqual(pointA)
    expect(line.b).toEqual(pointB)
  })

  it('intersect returns correct point of intersection', () => {
    const pointC = new Point(2, -2)
    const pointD = new Point(2, 2)
    const otherLine = new Line(pointC, pointD)

    const expected = new Point(2, 0)

    const actual = line.intersect(otherLine)
    expect(actual).toEqual(expected)
  })
})
