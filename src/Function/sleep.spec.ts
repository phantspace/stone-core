import { sleep, sleepRandom } from './sleep'

describe('sleep', () => {
  test('should resolve after the specified time', async () => {
    // Test case 1: Sleep for 500 milliseconds
    const start1 = Date.now()
    await sleep(500)
    const end1 = Date.now()
    expect(end1 - start1).toBeGreaterThanOrEqual(500)

    // Test case 2: Sleep for 1000 milliseconds (default value)
    const start2 = Date.now()
    await sleep()
    const end2 = Date.now()
    expect(end2 - start2).toBeGreaterThanOrEqual(1000)

    // Test case 3: Sleep for 2000 milliseconds
    const start3 = Date.now()
    await sleep(2000)
    const end3 = Date.now()
    expect(end3 - start3).toBeGreaterThanOrEqual(2000)
  })
})

describe('sleepRandom', () => {
  test('should resolve after a random time within the specified range', async () => {
    // Test case 1: Random sleep between 500 and 1000 milliseconds
    const start1 = Date.now()
    await sleepRandom(500, 1000)
    const end1 = Date.now()
    expect(end1 - start1).toBeGreaterThanOrEqual(500)
    expect(end1 - start1).toBeLessThanOrEqual(1000)

    // Test case 2: Random sleep between 2000 and 3000 milliseconds
    const start2 = Date.now()
    await sleepRandom(2000, 3000)
    const end2 = Date.now()
    expect(end2 - start2).toBeGreaterThanOrEqual(2000)
    expect(end2 - start2).toBeLessThanOrEqual(3000)

    // Test case 3: Random sleep between 0 and 100 milliseconds
    const start3 = Date.now()
    await sleepRandom(0, 100)
    const end3 = Date.now()
    expect(end3 - start3).toBeGreaterThanOrEqual(0)
    expect(end3 - start3).toBeLessThanOrEqual(100)
  })
})
