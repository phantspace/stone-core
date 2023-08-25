import { isValidNumber } from './is-valid-number'

describe('isValidNumber', () => {
  test('should return true for valid number values', () => {
    // Test case 1: Check positive integer value
    const result1 = isValidNumber(123)
    expect(result1).toEqual(true)

    // Test case 2: Check negative integer value
    const result2 = isValidNumber(-456)
    expect(result2).toEqual(true)

    // Test case 3: Check decimal number value
    const result3 = isValidNumber(3.14)
    expect(result3).toEqual(true)
  })

  test('should return false for invalid number values', () => {
    // Test case 4: Check NaN value
    const result4 = isValidNumber(NaN)
    expect(result4).toEqual(false)

    // Test case 5: Check positive infinity value
    const result5 = isValidNumber(Infinity)
    expect(result5).toEqual(false)

    // Test case 6: Check negative infinity value
    const result6 = isValidNumber(-Infinity)
    expect(result6).toEqual(false)

    // Test case 7: Check non-number value
    const result7 = isValidNumber('abc')
    expect(result7).toEqual(false)

    // Test case 8: Check object value
    const result8 = isValidNumber({})
    expect(result8).toEqual(false)

    // Test case 9: Check array value
    const result9 = isValidNumber([])
    expect(result9).toEqual(false)

    // Test case 10: Check boolean value
    const result10 = isValidNumber(true)
    expect(result10).toEqual(false)

    // Test case 11: Check null value
    const result11 = isValidNumber(null)
    expect(result11).toEqual(false)

    // Test case 12: Check undefined value
    const result12 = isValidNumber(undefined)
    expect(result12).toEqual(false)
  })
})
