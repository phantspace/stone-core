import { isFalsey } from './is-falsey'

describe('isFalsey', () => {
  test('should return true for false-like values', () => {
    // Test case 1: false boolean value
    expect(isFalsey(false)).toBe(true)

    // Test case 2: "false" string value
    expect(isFalsey('false')).toBe(true)

    // Test case 3: 0 number value
    expect(isFalsey(0)).toBe(true)

    // Test case 4: "0" string value
    expect(isFalsey('0')).toBe(true)
  })

  test('should return false for other values', () => {
    // Test case 5: true boolean value
    expect(isFalsey(true)).toBe(false)

    // Test case 6: "true" string value
    expect(isFalsey('true')).toBe(false)

    // Test case 7: non-zero number value
    expect(isFalsey(42)).toBe(false)

    // Test case 8: non-empty string value
    expect(isFalsey('hello')).toBe(false)

    // Test case 9: null value
    expect(isFalsey(null)).toBe(false)

    // Test case 10: undefined value
    expect(isFalsey(undefined)).toBe(false)
  })
})
