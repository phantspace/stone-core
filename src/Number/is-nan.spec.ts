import { isNaN } from './is-nan'

describe('isNaN', () => {
  test('should return true for NaN', () => {
    // Test case 1: Check NaN value
    const result1 = isNaN(NaN)
    expect(result1).toEqual(true)
  })

  test('should return false for non-NaN values', () => {
    // Test case 2: Check non-NaN number value
    const result2 = isNaN(123)
    expect(result2).toEqual(false)

    // Test case 3: Check non-NaN string value
    const result3 = isNaN('123')
    expect(result3).toEqual(false)

    // Test case 4: Check non-NaN object value
    const result4 = isNaN({})
    expect(result4).toEqual(false)

    // Test case 5: Check non-NaN array value
    const result5 = isNaN([])
    expect(result5).toEqual(false)

    // Test case 6: Check non-NaN boolean value
    const result6 = isNaN(true)
    expect(result6).toEqual(false)

    // Test case 7: Check non-NaN null value
    const result7 = isNaN(null)
    expect(result7).toEqual(false)

    // Test case 8: Check non-NaN undefined value
    const result8 = isNaN(undefined)
    expect(result8).toEqual(false)
  })
})
