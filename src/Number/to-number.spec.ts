import { toNumber } from './to-number'

describe('toNumber', () => {
  test('should return the correct number value for valid input', () => {
    // Test case 1: Check positive integer value
    const result1 = toNumber(123)
    expect(result1).toEqual(123)

    // Test case 2: Check negative integer value
    const result2 = toNumber(-456)
    expect(result2).toEqual(-456)

    // Test case 3: Check decimal number value
    const result3 = toNumber(3.14)
    expect(result3).toEqual(3.14)

    // Test case 4: Check numeric string value
    const result4 = toNumber('123')
    expect(result4).toEqual(123)

    // Test case 5: Check numeric string value with leading/trailing spaces
    const result5 = toNumber('  456  ')
    expect(result5).toEqual(456)

    // Test case 6: Check numeric string value with decimal
    const result6 = toNumber('7.89')
    expect(result6).toEqual(7.89)
  })

  test('should return NaN for invalid input', () => {
    // Test case 7: Check NaN value
    const result7 = toNumber(NaN)
    expect(result7).toBeNaN()

    // Test case 8: Check non-number string value
    const result8 = toNumber('abc')
    expect(result8).toBeNaN()

    // Test case 9: Check object value with valueOf method returning NaN
    const obj1 = {
      valueOf: () => NaN,
    }
    const result9 = toNumber(obj1)
    expect(result9).toBeNaN()

    // Test case 10: Check object value with valueOf method returning numeric value
    const obj2 = {
      valueOf: () => 123,
    }
    const result10 = toNumber(obj2)
    expect(result10).toEqual(123)

    // Test case 11: Check object value with toString method returning numeric string
    const obj3 = {
      toString: () => '456',
    }
    const result11 = toNumber(obj3)
    expect(result11).toEqual(456)

    // Test case 12: Check object value with toString method returning non-number string
    const obj4 = {
      toString: () => 'abc',
    }
    const result12 = toNumber(obj4)
    expect(result12).toBeNaN()

    // Test case 13: Check array value
    const result13 = toNumber([])
    expect(result13).toEqual(0)

    // Test case 14: Check boolean value
    const result14 = toNumber(true)
    expect(result14).toBeNaN()

    // Test case 15: Check null value
    const result15 = toNumber(null)
    expect(result15).toBeNaN()

    // Test case 16: Check undefined value
    const result16 = toNumber(undefined)
    expect(result16).toBeNaN()
  })
})
