import { isArrayLike } from './is-array-like'

describe('isArrayLike', () => {
  test('should return true for an empty array', () => {
    const array = []

    const result = isArrayLike(array)

    expect(result).toBe(true)
  })

  test('should return true for an array with elements', () => {
    const array = [1, 2, 3]

    const result = isArrayLike(array)

    expect(result).toBe(true)
  })

  test('should return true for a string', () => {
    const str = 'Hello, World!'

    const result = isArrayLike(str)

    expect(result).toBe(true)
  })

  test('should return true for an array-like object', () => {
    const arrayLikeObject = { length: 3, 0: 'a', 1: 'b', 2: 'c' }

    const result = isArrayLike(arrayLikeObject)

    expect(result).toBe(true)
  })

  test('should return true for arguments object', () => {
    function testFunction(...args: any[]) {
      const result = isArrayLike(args)

      expect(result).toBe(true)
    }

    testFunction(1, 2, 3)
  })

  test('should return false for a plain object', () => {
    const object = { key: 'value' }

    const result = isArrayLike(object)

    expect(result).toBe(false)
  })

  // Add more test cases here
})
