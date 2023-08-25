import { asyncMap } from './async-map'

describe('asyncMap', () => {
  test('should map array values asynchronously', async () => {
    const array = [1, 2, 3]
    const mapper = async item => {
      return item * 2
    }

    const result = await asyncMap(array, mapper)

    expect(result).toEqual([2, 4, 6])
  })

  test('should handle empty array', async () => {
    const array = []
    const mapper = async item => {
      return item + 1
    }

    const result = await asyncMap(array, mapper)

    expect(result).toEqual([])
  })

  test('should handle array with async mapper returning promises', async () => {
    const array = [1, 2, 3]
    const mapper = async item => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(item * 3)
        }, 100)
      })
    }

    const result = await asyncMap(array, mapper)

    expect(result).toEqual([3, 6, 9])
  })
})
