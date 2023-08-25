import { isSymbol } from './is-symbol'

describe('isSymbol', () => {
  test('should return true for symbol values', () => {
    // Test case 1: Check symbol value
    const result1 = isSymbol(Symbol())
    expect(result1).toEqual(true)

    // Test case 2: Check symbol value with description
    const result2 = isSymbol(Symbol('foo'))
    expect(result2).toEqual(true)
  })

  test('should return false for non-symbol values', () => {
    // Test case 3: Check string value
    const result3 = isSymbol('abc')
    expect(result3).toEqual(false)

    // Test case 4: Check number value
    const result4 = isSymbol(123)
    expect(result4).toEqual(false)

    // Test case 5: Check boolean value
    const result5 = isSymbol(true)
    expect(result5).toEqual(false)

    // Test case 6: Check object value
    const result6 = isSymbol({})
    expect(result6).toEqual(false)

    // Test case 7: Check array value
    const result7 = isSymbol([])
    expect(result7).toEqual(false)

    // Test case 8: Check null value
    const result8 = isSymbol(null)
    expect(result8).toEqual(false)

    // Test case 9: Check undefined value
    const result9 = isSymbol(undefined)
    expect(result9).toEqual(false)
  })
})
