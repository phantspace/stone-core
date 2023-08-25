import { isFunction } from './is-function'

describe('isFunction function', () => {
  test('should return true if value is a function', () => {
    // Test case 1: A regular function
    const result1 = isFunction(() => {})
    expect(result1).toEqual(true)

    // Test case 2: An arrow function
    const result2 = isFunction(param => param)
    expect(result2).toEqual(true)

    // Test case 3: A built-in function
    const result3 = isFunction(Array.isArray)
    expect(result3).toEqual(true)
  })

  test('should return false if value is not a function', () => {
    // Test case 4: A number
    const result4 = isFunction(42)
    expect(result4).toEqual(false)

    // Test case 5: An object
    const result5 = isFunction({ name: 'John' })
    expect(result5).toEqual(false)

    // Test case 6: A string
    const result6 = isFunction('Hello')
    expect(result6).toEqual(false)
  })

  test('should handle different types of function objects', () => {
    // Test case 7: A generator function
    function* generatorFunc() {
      yield 1
    }
    const result7 = isFunction(generatorFunc)
    expect(result7).toEqual(true)

    // Test case 8: A function created with the Function constructor
    const result8 = isFunction(new Function('return 42'))
    expect(result8).toEqual(true)
  })
})
