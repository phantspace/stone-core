import { isString } from './is-string'

describe('isString function', () => {
  test('should return true for string values', () => {
    // Test case 1: Check string value
    const result1 = isString('Hello')
    expect(result1).toEqual(true)

    // Test case 2: Check empty string
    const result2 = isString('')
    expect(result2).toEqual(true)

    // Test case 3: Check string with whitespace
    const result3 = isString('   ')
    expect(result3).toEqual(true)

    // Test case 4: Check string with special characters
    const result4 = isString('!@#$%^&*()')
    expect(result4).toEqual(true)
  })

  test('should return false for non-string values', () => {
    // Test case 5: Check number value
    const result5 = isString(123)
    expect(result5).toEqual(false)

    // Test case 6: Check boolean value
    const result6 = isString(true)
    expect(result6).toEqual(false)

    // Test case 7: Check object value
    const result7 = isString({})
    expect(result7).toEqual(false)

    // Test case 8: Check array value
    const result8 = isString([])
    expect(result8).toEqual(false)

    // Test case 9: Check null value
    const result9 = isString(null)
    expect(result9).toEqual(false)

    // Test case 10: Check undefined value
    const result10 = isString(undefined)
    expect(result10).toEqual(false)
  })
})
