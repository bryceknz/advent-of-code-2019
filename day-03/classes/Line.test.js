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

  it('getPoints returns list of points in a horizontal line', () => {
    const expected = [ new Point(0, 0), new Point(1, 0), new Point(2, 0), new Point(3, 0), new Point(4, 0) ]
    const actual = line.getPoints()
    expect(actual).toEqual(expected)
  })

  it('getPoints returns list of points in a vertical line', () => {
    const pointC = new Point(0, 0)
    const pointD = new Point(0, 10)
    const otherLine = new Line(pointC, pointD)

    const expected = [ new Point(0, 0), new Point(0, 1), new Point(0, 2), new Point(0, 3), new Point(0, 4), new Point(0, 5), new Point(0, 6), new Point(0, 7), new Point(0, 8), new Point(0, 9), new Point(0, 10) ]
    const actual = otherLine.getPoints()
    expect(actual).toEqual(expected)
  })
})
