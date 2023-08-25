import { isArrayLikeObject } from './is-array-like-object'

describe('isArrayLikeObject function', () => {
  test('should return true if value is an array-like object', () => {
    // Test case 1: An array
    const result1 = isArrayLikeObject([1, 2, 3])
    expect(result1).toEqual(true)

    // Test case 2: A string
    const result2 = isArrayLikeObject('Hello')
    expect(result2).toEqual(false)

    // Test case 3: Arguments object
    function testFunction(...rest: any[]) {
      const result3 = isArrayLikeObject(arguments)
      expect(result3).toEqual(true)
    }
    testFunction('one', 'two', 'three')
  })

  test('should return false if value is not an array-like object', () => {
    // Test case 4: An empty object
    const result4 = isArrayLikeObject({})
    expect(result4).toEqual(false)

    // Test case 5: A function
    const result5 = isArrayLikeObject(() => {})
    expect(result5).toEqual(false)

    // Test case 6: Null value
    const result6 = isArrayLikeObject(null)
    expect(result6).toEqual(false)

    // Test case 7: Undefined value
    const result7 = isArrayLikeObject(undefined)
    expect(result7).toEqual(false)

    // Test case 8: Boolean value
    const result8 = isArrayLikeObject(true)
    expect(result8).toEqual(false)

    // Test case 9: Number value
    const result9 = isArrayLikeObject(42)
    expect(result9).toEqual(false)
  })
})
