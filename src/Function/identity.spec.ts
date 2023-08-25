import { identity } from './identity'

describe('identity', () => {
  test('should return the same value', () => {
    // Test case 1: Number
    expect(identity(42)).toBe(42)

    // Test case 2: String
    expect(identity('hello')).toBe('hello')

    // Test case 3: Boolean
    expect(identity(true)).toBe(true)

    // Test case 4: Array
    const arr = [1, 2, 3]
    expect(identity(arr)).toBe(arr)

    // Test case 5: Object
    const obj = { name: 'John', age: 30 }
    expect(identity(obj)).toBe(obj)

    // Test case 6: Null
    expect(identity(null)).toBeNull()

    // Test case 7: Undefined
    expect(identity(undefined)).toBeUndefined()
  })
})
