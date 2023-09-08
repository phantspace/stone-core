import { clamp } from './clamp'

describe('clamp', () => {
  test('should return the number itself if it is within the range', () => {
    // Test case 1: Number is within the range
    const result1 = clamp(5, 1, 10)
    expect(result1).toEqual(5)

    // Test case 2: Number is equal to the lower bound
    const result2 = clamp(1, 1, 10)
    expect(result2).toEqual(1)

    // Test case 3: Number is equal to the upper bound
    const result3 = clamp(10, 1, 10)
    expect(result3).toEqual(10)
  })

  test('should clamp the number to the lower bound if it is less than the lower bound', () => {
    // Test case 4: Number is less than the lower bound
    const result4 = clamp(-5, 1, 10)
    expect(result4).toEqual(1)

    // Test case 5: Number is less than the lower bound (lower bound is negative)
    const result5 = clamp(-10, -20, -5)
    expect(result5).toEqual(-10)
  })

  test('should clamp the number to the upper bound if it is greater than the upper bound', () => {
    // Test case 6: Number is greater than the upper bound
    const result6 = clamp(15, 1, 10)
    expect(result6).toEqual(10)

    // Test case 7: Number is greater than the upper bound (upper bound is negative)
    const result7 = clamp(5, -10, -5)
    expect(result7).toEqual(-5)
  })

  test('should handle undefined lower or upper bound', () => {
    // Test case 8: Lower bound is undefined
    const result8 = clamp(5, undefined, 10)
    expect(result8).toEqual(5)

    // Test case 9: Upper bound is undefined
    const result9 = clamp(15, 1, undefined)
    expect(result9).toEqual(15)

    // Test case 10: Both lower and upper bound are undefined
    const result10 = clamp(5, undefined, undefined)
    expect(result10).toEqual(5)
  })

  test('should handle NaN', () => {
    // Test case 11: Number is NaN
    const result11 = clamp(NaN, 1, 10)
    expect(result11).toBeNaN()
  })
})
