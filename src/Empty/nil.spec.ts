import { isNil, isNull, isUndefined } from './nil'

describe('isNil', () => {
  test('should return true for null or undefined values', () => {
    // Test case 1: null value
    expect(isNil(null)).toBe(true)

    // Test case 2: undefined value
    expect(isNil(undefined)).toBe(true)

    // Test case 3: non-nil value
    expect(isNil(42)).toBe(false)
  })
})

describe('isNull', () => {
  test('should return true only for null values', () => {
    // Test case 1: null value
    expect(isNull(null)).toBe(true)

    // Test case 2: undefined value
    expect(isNull(undefined)).toBe(false)

    // Test case 3: non-null value
    expect(isNull(42)).toBe(false)
  })
})

describe('isUndefined', () => {
  test('should return true only for undefined values', () => {
    // Test case 1: null value
    expect(isUndefined(null)).toBe(false)

    // Test case 2: undefined value
    expect(isUndefined(undefined)).toBe(true)

    // Test case 3: non-undefined value
    expect(isUndefined(42)).toBe(false)
  })
})
