import { isArray } from './is-array'

describe('isArray', () => {
  test('should return true for an empty array', () => {
    const array = []

    const result = isArray(array)

    expect(result).toBe(true)
  })

  test('should return true for an array with elements', () => {
    const array = [1, 2, 3]

    const result = isArray(array)

    expect(result).toBe(true)
  })

  test('should return true for Array.prototype', () => {
    const result = isArray(Array.prototype)

    expect(result).toBe(true)
  })

  test('should return false for a plain object', () => {
    const object = { key: 'value' }

    const result = isArray(object)

    expect(result).toBe(false)
  })

  test('should return false for a string', () => {
    const str = 'Hello, World!'

    const result = isArray(str)

    expect(result).toBe(false)
  })
})
