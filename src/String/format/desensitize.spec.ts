import { desensitize } from './desensitize'

describe('desensitize function', () => {
  test('should anonymize the string with default configuration', () => {
    // Test case 1: Anonymize a string with default configuration
    const result1 = desensitize('1234567890')
    expect(result1).toEqual('12****90')

    // Test case 2: Anonymize a string with longer prePlainLength and sufPlainLength
    const result2 = desensitize('1234567890', { prePlainLength: 4, sufPlainLength: 4 })
    expect(result2).toEqual('1234****7890')
  })

  test('should use custom mask symbol and mask length', () => {
    // Test case 3: Anonymize a string with custom mask symbol and mask length
    const result3 = desensitize('1234567890', { maskSymbol: '#', maskLength: 6 })
    expect(result3).toEqual('12######90')
  })

  test('should handle strings shorter than prePlainLength + sufPlainLength', () => {
    // Test case 4: Anonymize a string shorter than prePlainLength + sufPlainLength
    const result4 = desensitize('123', { prePlainLength: 2, sufPlainLength: 2 })
    expect(result4).toEqual('12****3')
  })

  test('should handle maskLength longer than the masked portion', () => {
    // Test case 5: Anonymize a string with maskLength longer than the masked portion
    const result5 = desensitize('123456', { maskLength: 10 })
    expect(result5).toEqual('12**********56')
  })
})
