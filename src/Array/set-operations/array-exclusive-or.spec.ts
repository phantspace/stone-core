import { arrayExclusiveOr } from './array-exclusive-or'

describe('arrayExclusiveOr function', () => {
  test('should return exclusive elements from two arrays', () => {
    // Test case 1: Exclusive elements in both arrays
    const result1 = arrayExclusiveOr([1, 2, 3], [2, 3, 4])
    expect(result1).toEqual([1, 4])

    // Test case 2: Exclusive elements in one array
    const result2 = arrayExclusiveOr(['a', 'b', 'c'], ['b', 'c', 'd'])
    expect(result2).toEqual(['a', 'd'])

    // Test case 3: Empty array
    const result3 = arrayExclusiveOr([], [1, 2, 3])
    expect(result3).toEqual([1, 2, 3])

    // Test case 4: No exclusive elements
    const result4 = arrayExclusiveOr([1, 2, 3], [1, 2, 3])
    expect(result4).toEqual([])
  })

  test('should handle arrays with duplicate elements', () => {
    // Test case 5: Duplicate elements in both arrays
    const result5 = arrayExclusiveOr([1, 1, 2, 2, 3], [2, 2, 3, 3, 4])
    expect(result5).toEqual([1, 4])

    // Test case 6: Duplicate elements in one array
    const result6 = arrayExclusiveOr(['a', 'a', 'b', 'b'], ['b', 'b', 'c', 'c'])
    expect(result6).toEqual(['a', 'c'])
  })

  test('should handle arrays of different types', () => {
    // Test case 7: Different types of elements
    const result7 = arrayExclusiveOr([1, 'a', true], ['a', false])
    expect(result7).toEqual([1, true, false])
  })
})
