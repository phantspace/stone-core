import { isFinite, toFinite } from './finite'

describe('isFinite', () => {
  test('should return true for finite numbers', () => {
    // Test case 1: Check positive finite number
    const result1 = isFinite(123)
    expect(result1).toEqual(true)

    // Test case 2: Check negative finite number
    const result2 = isFinite(-456)
    expect(result2).toEqual(true)

    // Test case 3: Check zero
    const result3 = isFinite(0)
    expect(result3).toEqual(true)

    // Test case 4: Check decimal number
    const result4 = isFinite(3.14)
    expect(result4).toEqual(true)
  })

  test('should return false for non-finite numbers', () => {
    // Test case 5: Check positive infinity
    const result5 = isFinite(Number.POSITIVE_INFINITY)
    expect(result5).toEqual(false)

    // Test case 6: Check negative infinity
    const result6 = isFinite(Number.NEGATIVE_INFINITY)
    expect(result6).toEqual(false)

    // Test case 7: Check NaN
    const result7 = isFinite(NaN)
    expect(result7).toEqual(false)
  })

  test('should return false for non-number values', () => {
    // Test case 8: Check string value
    const result8 = isFinite('abc')
    expect(result8).toEqual(false)

    // Test case 9: Check boolean value
    const result9 = isFinite(true)
    expect(result9).toEqual(false)

    // Test case 10: Check object value
    const result10 = isFinite({})
    expect(result10).toEqual(false)

    // Test case 11: Check array value
    const result11 = isFinite([])
    expect(result11).toEqual(false)

    // Test case 12: Check null value
    const result12 = isFinite(null)
    expect(result12).toEqual(false)

    // Test case 13: Check undefined value
    const result13 = isFinite(undefined)
    expect(result13).toEqual(false)
  })
})

describe('toFinite', () => {
  test('should return a finite number for valid numeric values', () => {
    // Test case 1: Check positive finite number
    const result1 = toFinite(123)
    expect(result1).toEqual(123)

    // Test case 2: Check negative finite number
    const result2 = toFinite(-456)
    expect(result2).toEqual(-456)

    // Test case 3: Check zero
    const result3 = toFinite(0)
    expect(result3).toEqual(0)

    // Test case 4: Check decimal number
    const result4 = toFinite(3.14)
    expect(result4).toEqual(3.14)
  })

  test('should return positive infinity for positive infinity value', () => {
    const result5 = toFinite(Number.POSITIVE_INFINITY)
    expect(result5).toEqual(Number.MAX_VALUE)
  })

  test('should return negative infinity for negative infinity value', () => {
    const result6 = toFinite(Number.NEGATIVE_INFINITY)
    expect(result6).toEqual(Number.MIN_VALUE)
  })

  test('should return +0 for NaN, null, and undefined values', () => {
    // Test case 7: Check NaN value
    const result7 = toFinite(NaN)
    expect(result7).toEqual(+0)

    // Test case 8: Check null value
    const result8 = toFinite(null)
    expect(result8).toEqual(+0)

    // Test case 9: Check undefined value
    const result9 = toFinite(undefined)
    expect(result9).toEqual(+0)
  })

  test('should return NaN for non-numeric values', () => {
    // Test case 10: Check string value
    const result10 = toFinite('abc')
    expect(result10).toBeNaN()

    // Test case 11: Check boolean value
    const result11 = toFinite(true)
    expect(result11).toBeNaN()

    // Test case 12: Check object value
    const result12 = toFinite({})
    expect(result12).toBeNaN()

    // Test case 13: Check array value
    const result13 = toFinite([])
    expect(result13).toBeNaN()
  })
})
