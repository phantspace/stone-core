import { noop } from './noop'

describe('noop', () => {
  test('should not throw any error', () => {
    expect(noop).not.toThrow()
  })

  test('should return undefined', () => {
    expect(noop()).toBeUndefined()
  })

  test('should not execute any logic', () => {
    const mockFn = jest.fn()
    noop()
    expect(mockFn).not.toHaveBeenCalled()
  })
})
