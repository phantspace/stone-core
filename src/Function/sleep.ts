import { nativeRandom, nativeMax, nativeRound } from '../Math'

/**
 * Pause execution for N milliseconds
 */
export const sleep = async (ms: number = 1000): Promise<void> => new Promise(resolve => setTimeout(resolve, ms))

/**
 * Wait for a random duration.
 */
export const sleepRandom = async (min: number, max: number): Promise<void> =>
  sleep(min + nativeRound(nativeRandom() * nativeMax(0, max - min)))
