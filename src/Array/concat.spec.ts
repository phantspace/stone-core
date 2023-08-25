import { concat } from './concat'

describe('concat', () => {
  test('should concatenate multiple arrays', () => {
    const array1 = [1, 2, 3]
    const array2 = [4, 5, 6]
    const array3 = [7, 8, 9]

    const result = concat(array1, array2, array3)

    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })

  test('should concatenate arrays of different types', () => {
    const array1 = [1, 2, 3]
    const array2 = ['a', 'b', 'c']
    const array3 = [true, false]

    const result = concat(array1, array2, array3)

    expect(result).toEqual([1, 2, 3, 'a', 'b', 'c', true, false])
  })

  test('should concatenate multiple arrays including empty arrays', () => {
    const array1 = [1, 2, 3]
    const array2 = []
    const array3 = [4, 5, 6]

    const result = concat(array1, array2, array3)

    expect(result).toEqual([1, 2, 3, 4, 5, 6])
  })

  test('should return a new array and not modify the original arrays', () => {
    const array1 = [1, 2, 3]
    const array2 = [4, 5, 6]

    const result = concat(array1, array2)

    expect(result).toEqual([1, 2, 3, 4, 5, 6])
    expect(array1).toEqual([1, 2, 3]) // original array1 is unchanged
    expect(array2).toEqual([4, 5, 6]) // original array2 is unchanged
  })
})
