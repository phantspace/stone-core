import { isObjectLike } from './is-object-like'

describe('isObjectLike function', () => {
  test('should return true if value is object-like', () => {
    // Test case 1: An empty object
    const result1 = isObjectLike({})
    expect(result1).toEqual(true)

    // Test case 2: An array
    const result2 = isObjectLike([1, 2, 3])
    expect(result2).toEqual(true)

    // Test case 3: A function
    const result3 = isObjectLike(() => {})
    expect(result3).toEqual(false)
  })

  test('should return false if value is not object-like', () => {
    // Test case 4: A primitive value
    const result4 = isObjectLike(42)
    expect(result4).toEqual(false)

    // Test case 5: Null value
    const result5 = isObjectLike(null)
    expect(result5).toEqual(false)

    // Test case 6: Undefined value
    const result6 = isObjectLike(undefined)
    expect(result6).toEqual(false)

    // Test case 7: Boolean value
    const result7 = isObjectLike(true)
    expect(result7).toEqual(false)

    // Test case 8: String value
    const result8 = isObjectLike('Hello')
    expect(result8).toEqual(false)

    // Test case 9: Number value
    const result9 = isObjectLike(42)
    expect(result9).toEqual(false)
  })
})
