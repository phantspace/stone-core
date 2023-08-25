import { toThousands } from './to-thousands'

describe('toThousands', () => {
  test('should convert number to thousands separator with default separators', () => {
    // Test case 1: Convert a positive number
    const result1 = toThousands(1234567)
    expect(result1).toEqual('1,234,567')

    // Test case 2: Convert a negative number
    const result2 = toThousands(-9876543)
    expect(result2).toEqual('-9,876,543')
  })

  test('should convert number to thousands separator with custom separators', () => {
    // Test case 3: Convert a number with custom thousand separator
    const result3 = toThousands(1234567, ' ', '.')
    expect(result3).toEqual('1 234 567')

    // Test case 4: Convert a number with custom decimal separator
    const result4 = toThousands(9876543.21, ',', '|')
    expect(result4).toEqual('9,876,543|21')

    // Test case 5: Convert a number with both custom separators
    const result5 = toThousands(1234567.89, ' ', '|')
    expect(result5).toEqual('1 234 567|89')
  })

  test('should return an empty string for invalid values', () => {
    // Test case 6: Convert null value
    const result6 = toThousands(null)
    expect(result6).toEqual('')

    // Test case 7: Convert NaN value
    const result7 = toThousands(NaN)
    expect(result7).toEqual('')

    // Test case 8: Convert invalid string value
    const result8 = toThousands('invalid')
    expect(result8).toEqual('')

    // Test case 9: NaN value
    const result9 = toThousands(NaN)
    expect(result9).toEqual('')
  })
})
