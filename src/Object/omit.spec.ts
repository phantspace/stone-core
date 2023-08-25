import { omit } from './omit'

describe('omit', () => {
  test('should omit a single key', () => {
    expect(omit({ a: 1, b: 2, c: 3 }, ['b'])).toEqual({ a: 1, c: 3 })
  })

  test('should omit multiple keys', () => {
    expect(omit({ a: 1, b: 2, c: 3, d: 4 }, ['b', 'd'])).toEqual({ a: 1, c: 3 })
  })

  test('should handle omitting a key that does not exist', () => {
    expect(omit({ a: 1, b: 2, c: 3 }, ['d'])).toEqual({ a: 1, b: 2, c: 3 })
  })

  test('should omit all keys', () => {
    expect(omit({ a: 1, b: 2, c: 3 }, ['a', 'b', 'c'])).toEqual({})
  })

  test('should handle an empty object', () => {
    expect(omit({}, ['a', 'b', 'c'])).toEqual({})
  })

  test('should handle an empty keys array', () => {
    expect(omit({ a: 1, b: 2, c: 3 }, [])).toEqual({ a: 1, b: 2, c: 3 })
  })

  test('should handle objects with non-string keys', () => {
    expect(omit({ 1: 'one', 2: 'two', 3: 'three' }, ['2'])).toEqual({ 1: 'one', 3: 'three' })
  })
})
