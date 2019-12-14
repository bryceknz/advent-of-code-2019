const Point = require('./Point')

describe('Point class tests', () => {
  const x = 2
  const y = 3
  const point = new Point(x, y)

  it('constructor returns an instance of Point with correct values', () => {
    expect(point instanceof Point).toBeTruthy()
    expect(point.x).toBe(x)
    expect(point.y).toBe(y)
  })

  it('constructor can handle an array as input', () => {
    const pointFromArray = new Point([x, y])
    expect(pointFromArray.x).toBe(x)
    expect(pointFromArray.y).toBe(y)
  })

  it('toArray returns an array with correct values', () => {
    const pointArray = point.toArray()
    const [ arrX, arrY ] = pointArray
    expect(Array.isArray(pointArray)).toBeTruthy()
    expect(arrX).toBe(x)
    expect(arrY).toBe(y)
  })

  it('distance returns correct Manhattan distance', () => {
    const otherPoint = new Point(5, 8)
    expect(point.distance(otherPoint)).toBe(8)
  })

  it('clone returns a new cloned Point', () => {
    const newPoint = point.clone()
    expect(newPoint).toEqual(point)
    expect(point === newPoint).toBeFalsy()
  })
})
