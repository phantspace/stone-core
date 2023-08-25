import { arrayIntersect } from './array-intersect'

describe('arrayIntersect', () => {
  test('should return the intersection of two arrays', () => {
    const arrA = [1, 2, 3, 4]
    const arrB = [3, 4, 5, 6]

    const result = arrayIntersect(arrA, arrB)

    expect(result).toEqual([3, 4])
  })

  test('should handle arrays with different types', () => {
    const arrA = [1, 'a', true, null]
    const arrB = ['a', false, null, undefined]

    const result = arrayIntersect(arrA, arrB)

    expect(result).toEqual(['a', null])
  })

  test('should handle empty arrays', () => {
    const arrA: number[] = []
    const arrB: number[] = []

    const result = arrayIntersect(arrA, arrB)

    expect(result).toEqual([])
  })

  test('should handle arrays with no intersection', () => {
    const arrA = [1, 2, 3]
    const arrB = [4, 5, 6]

    const result = arrayIntersect(arrA, arrB)

    expect(result).toEqual([])
  })

  test('should handle arrays with no intersection', () => {
    const arrA = [4, 3, 3, 1, 2]
    const arrB = [4, 4, 3, 5, 6]

    const result = arrayIntersect(arrA, arrB)

    expect(result).toEqual([4, 3])
  })
})
