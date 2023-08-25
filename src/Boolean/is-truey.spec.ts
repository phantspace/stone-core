import { isTruey } from './is-truey'

describe('isTruey', () => {
  test('should return true for true-like values', () => {
    // Test case 1: true boolean value
    expect(isTruey(true)).toBe(true)

    // Test case 2: "true" string value
    expect(isTruey('true')).toBe(true)

    // Test case 3: 1 number value
    expect(isTruey(1)).toBe(true)

    // Test case 4: "1" string value
    expect(isTruey('1')).toBe(true)
  })

  test('should return false for other values', () => {
    // Test case 5: false boolean value
    expect(isTruey(false)).toBe(false)

    // Test case 6: "false" string value
    expect(isTruey('false')).toBe(false)

    // Test case 7: 0 number value
    expect(isTruey(0)).toBe(false)

    // Test case 8: "" empty string value
    expect(isTruey('')).toBe(false)

    // Test case 9: null value
    expect(isTruey(null)).toBe(false)

    // Test case 10: undefined value
    expect(isTruey(undefined)).toBe(false)
  })
})
