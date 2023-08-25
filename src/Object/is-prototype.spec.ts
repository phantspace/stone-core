import { isPrototype } from './is-prototype'

describe('isPrototype function', () => {
  test('should return true if value is a prototype object', () => {
    // Test case 1: A prototype object created with a constructor function
    function MyClass() {}
    const result1 = isPrototype(MyClass.prototype)
    expect(result1).toEqual(true)

    // Test case 2: A prototype object created with Object.create
    const result2 = isPrototype(Object.create(null))
    expect(result2).toEqual(false)

    // Test case 3: A prototype object created with Object.create
    const result3 = isPrototype(Object.create({}))
    expect(result3).toEqual(false)
  })

  test('should return false if value is not a prototype object', () => {
    // Test case 4: A regular object
    const obj = { name: 'John' }
    const result4 = isPrototype(obj)
    expect(result4).toEqual(false)

    // Test case 5: A function
    const func = () => {}
    const result5 = isPrototype(func)
    expect(result5).toEqual(false)

    // Test case 6: A primitive value
    const result6 = isPrototype(42)
    expect(result6).toEqual(false)
  })

  test('should handle null and undefined values', () => {
    // Test case 7: Null value
    const result7 = isPrototype(null)
    expect(result7).toEqual(false)

    // Test case 7: Undefined value
    const result8 = isPrototype(undefined)
    expect(result8).toEqual(false)
  })
})
