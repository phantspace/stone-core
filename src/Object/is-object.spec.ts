import { isObject } from './is-object'

describe('isObject function', () => {
  test('should return true if value is an object', () => {
    // Test case 1: An empty object
    const result1 = isObject({})
    expect(result1).toEqual(true)

    // Test case 2: An object with properties
    const result2 = isObject({ name: 'John', age: 30 })
    expect(result2).toEqual(true)

    // Test case 3: An array
    const result3 = isObject([1, 2, 3])
    expect(result3).toEqual(true)

    // Test case 4: A function
    const result4 = isObject(() => {})
    expect(result4).toEqual(true)
  })

  test('should return false if value is not an object', () => {
    // Test case 5: A primitive value
    const result5 = isObject(42)
    expect(result5).toEqual(false)

    // Test case 6: Null value
    const result6 = isObject(null)
    expect(result6).toEqual(false)

    // Test case 7: Undefined value
    const result7 = isObject(undefined)
    expect(result7).toEqual(false)

    // Test case 8: Boolean value
    const result8 = isObject(true)
    expect(result8).toEqual(false)
  })
})
