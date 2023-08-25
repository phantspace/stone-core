import { arrayUnion } from './array-union'

describe('arrayUnion', () => {
  test('should return the union of two arrays without duplicates', () => {
    const arrA = [1, 2, 3]
    const arrB = [3, 4, 5]

    const result = arrayUnion(arrA, arrB)

    expect(result).toEqual([1, 2, 3, 4, 5])
  })

  test('should handle arrays with different types', () => {
    const arrA = [1, 'a', true]
    const arrB = ['a', false]

    const result = arrayUnion(arrA, arrB)

    expect(result).toEqual([1, 'a', true, false])
  })

  test('should handle empty arrays', () => {
    const arrA: number[] = []
    const arrB: number[] = []

    const result = arrayUnion(arrA, arrB)

    expect(result).toEqual([])
  })

  test('should handle arrays with duplicate values', () => {
    const arrA = [1, 2, 2, 3]
    const arrB = [3, 4, 4, 5]

    const result = arrayUnion(arrA, arrB)

    expect(result).toEqual([1, 2, 3, 4, 5])
  })

  // Add more test cases here
})
