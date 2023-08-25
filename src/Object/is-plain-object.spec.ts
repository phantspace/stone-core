import { isPlainObject } from './is-plain-object'

describe('isPlainObject function', () => {
  test('should return true if value is a plain object', () => {
    // Test case 1: An empty object
    const result1 = isPlainObject({})
    expect(result1).toEqual(true)

    // Test case 2: An object with properties
    const result2 = isPlainObject({ name: 'John', age: 30 })
    expect(result2).toEqual(true)
  })

  test('should return false if value is not a plain object', () => {
    // Test case 3: An array
    const result3 = isPlainObject([1, 2, 3])
    expect(result3).toEqual(false)

    // Test case 4: A function
    const result4 = isPlainObject(() => {})
    expect(result4).toEqual(false)

    // Test case 5: Null value
    const result5 = isPlainObject(null)
    expect(result5).toEqual(false)

    // Test case 6: Undefined value
    const result6 = isPlainObject(undefined)
    expect(result6).toEqual(false)

    // Test case 7: Boolean value
    const result7 = isPlainObject(true)
    expect(result7).toEqual(false)

    // Test case 8: Number value
    const result8 = isPlainObject(42)
    expect(result8).toEqual(false)
  })
})
