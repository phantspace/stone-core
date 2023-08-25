import { asyncEach } from './async-each'

describe('asyncEach', () => {
  test('should iterate over each item in the array asynchronously', async () => {
    const arr = [1, 2, 3]
    const iteratee = jest.fn(async (item, idx) => {
      // Simulate an asynchronous operation
      await new Promise(resolve => setTimeout(resolve, 100))
      return true
    })

    await asyncEach(arr, iteratee)

    expect(iteratee).toHaveBeenCalledTimes(3)
    expect(iteratee).toHaveBeenCalledWith(1, 0, arr)
    expect(iteratee).toHaveBeenCalledWith(2, 1, arr)
    expect(iteratee).toHaveBeenCalledWith(3, 2, arr)
  })

  test('should handle empty array', async () => {
    const arr: number[] = []
    const iteratee = jest.fn()

    await asyncEach(arr, iteratee)

    expect(iteratee).toHaveBeenCalledTimes(0)
  })

  test('should break iteration when iteratee returns false asynchronously', async () => {
    const arr = [1, 2, 3, 4, 5]
    const iteratee = jest.fn(async (item, idx) => {
      // Simulate an asynchronous operation
      await new Promise(resolve => setTimeout(resolve, 100))
      if (idx === 2) {
        return false
      }
      return true
    })

    await asyncEach(arr, iteratee)

    expect(iteratee).toHaveBeenCalledTimes(3)
    expect(iteratee).toHaveBeenCalledWith(1, 0, arr)
    expect(iteratee).toHaveBeenCalledWith(2, 1, arr)
    expect(iteratee).toHaveBeenCalledWith(3, 2, arr)
  })

  test('should return the original array', async () => {
    const arr = [1, 2, 3]
    const iteratee = jest.fn()

    const result = await asyncEach(arr, iteratee)

    expect(result).toBe(arr)
  })

  // Add more test cases here
})
