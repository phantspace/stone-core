import { isNumber } from './is-number'

describe('isNumber', () => {
  test('should return true for number values', () => {
    // Test case 1: Check positive number value
    const result1 = isNumber(123)
    expect(result1).toEqual(true)

    // Test case 2: Check negative number value
    const result2 = isNumber(-456)
    expect(result2).toEqual(true)

    // Test case 3: Check decimal number value
    const result3 = isNumber(3.14)
    expect(result3).toEqual(true)
  })

  test('should return false for non-number values', () => {
    // Test case 4: Check string value
    const result4 = isNumber('123')
    expect(result4).toEqual(false)

    // Test case 5: Check object value
    const result5 = isNumber({})
    expect(result5).toEqual(false)

    // Test case 6: Check array value
    const result6 = isNumber([])
    expect(result6).toEqual(false)

    // Test case 7: Check boolean value
    const result7 = isNumber(true)
    expect(result7).toEqual(false)

    // Test case 8: Check null value
    const result8 = isNumber(null)
    expect(result8).toEqual(false)

    // Test case 9: Check undefined value
    const result9 = isNumber(undefined)
    expect(result9).toEqual(false)
  })
})
