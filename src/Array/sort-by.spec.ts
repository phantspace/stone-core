import { sortBy } from './sort-by'

describe('sortBy', () => {
  test('should sort array of objects by specified key in descending order', () => {
    const array = [
      { name: 'John', age: 30 },
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 35 },
    ]

    const sortedArray = sortBy(array, 'age')

    expect(sortedArray).toEqual([
      { name: 'Bob', age: 35 },
      { name: 'John', age: 30 },
      { name: 'Alice', age: 25 },
    ])
  })

  test('should handle empty array', () => {
    const array = []

    const sortedArray = sortBy(array, 'age')

    expect(sortedArray).toEqual([])
  })

  test('should handle array with objects missing the specified key', () => {
    const array = [{ name: 'John', age: 30 }, { name: 'Alice' }, { name: 'Bob', age: 35 }]

    const sortedArray = sortBy(array, 'age')

    expect(sortedArray).toEqual([{ name: 'Bob', age: 35 }, { name: 'John', age: 30 }, { name: 'Alice' }])
  })

  test('should handle array with objects having undefined as the specified key', () => {
    const array = [
      { name: 'John', age: 30 },
      { name: 'Alice', age: undefined },
      { name: 'Bob', age: 35 },
    ]

    const sortedArray = sortBy(array, 'age')

    expect(sortedArray).toEqual([
      { name: 'Bob', age: 35 },
      { name: 'John', age: 30 },
      { name: 'Alice', age: undefined },
    ])
  })
})
