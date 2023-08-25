import { arraySubtract } from './array-subtract'

describe('arraySubtract function', () => {
  test('should return elements in arrA that do not belong to arrB', () => {
    // Test case 1: Basic subtraction
    const result1 = arraySubtract([1, 2, 3, 4], [2, 4])
    expect(result1).toEqual([1, 3])

    // Test case 2: Empty arrB
    const result2 = arraySubtract([1, 2, 3], [])
    expect(result2).toEqual([1, 2, 3])

    // Test case 3: Empty arrA
    const result3 = arraySubtract([], [1, 2, 3])
    expect(result3).toEqual([])

    // Test case 4: No subtracted elements
    const result4 = arraySubtract([1, 2, 3], [4, 5, 6])
    expect(result4).toEqual([1, 2, 3])
  })

  test('should handle arrays with duplicate elements', () => {
    // Test case 5: Duplicate elements
    const result5 = arraySubtract([1, 1, 2, 2, 3], [1, 2])
    expect(result5).toEqual([3])

    // Test case 6: Duplicate elements in arrB
    const result6 = arraySubtract([1, 2, 3], [1, 1, 2, 2])
    expect(result6).toEqual([3])
  })

  test('should handle arrays of different types', () => {
    // Test case 7: Different types of elements
    const result7 = arraySubtract([1, 'a', true], ['a', false])
    expect(result7).toEqual([1, true])
  })
})
