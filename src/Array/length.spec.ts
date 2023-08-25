import { length } from './length'

describe('length', () => {
  test('should return the length of an array', () => {
    const array = [1, 2, 3, 4, 5]

    const result = length(array)

    expect(result).toBe(5)
  })

  test('should return the length of a string', () => {
    const str = 'Hello, World!'

    const result = length(str)

    expect(result).toBe(13)
  })

  test('should return 0 for null', () => {
    const result = length(null)

    expect(result).toBe(0)
  })

  test('should return 0 for undefined', () => {
    const result = length(undefined)

    expect(result).toBe(0)
  })

  test('should return 0 for a number', () => {
    const number = 42

    const result = length(number)

    expect(result).toBe(0)
  })
})
