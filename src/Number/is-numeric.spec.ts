import { isNumeric } from './is-numeric'

describe('isNumeric', () => {
  test('should return true for numeric values', () => {
    // Test case 1: Check positive integer value
    const result1 = isNumeric(123)
    expect(result1).toEqual(true)

    // Test case 2: Check negative integer value
    const result2 = isNumeric(-456)
    expect(result2).toEqual(true)

    // Test case 3: Check decimal number value
    const result3 = isNumeric(3.14)
    expect(result3).toEqual(true)

    // Test case 4: Check numeric string value
    const result4 = isNumeric('123')
    expect(result4).toEqual(true)

    // Test case 5: Check numeric string value with leading/trailing spaces
    const result5 = isNumeric('  456  ')
    expect(result5).toEqual(true)

    // Test case 6: Check numeric string value with decimal
    const result6 = isNumeric('7.89')
    expect(result6).toEqual(true)
  })

  test('should return false for non-numeric values', () => {
    // Test case 7: Check non-numeric string value
    const result7 = isNumeric('abc')
    expect(result7).toEqual(false)

    // Test case 8: Check object value
    const result8 = isNumeric({})
    expect(result8).toEqual(false)

    // Test case 9: Check array value
    const result9 = isNumeric([])
    expect(result9).toEqual(false)

    // Test case 10: Check boolean value
    const result10 = isNumeric(true)
    expect(result10).toEqual(false)

    // Test case 11: Check null value
    const result11 = isNumeric(null)
    expect(result11).toEqual(false)

    // Test case 12: Check undefined value
    const result12 = isNumeric(undefined)
    expect(result12).toEqual(false)
  })
})
