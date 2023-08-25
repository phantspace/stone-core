/**
 * Asynchronous methods for array map
 */
export const asyncMap = async <T>(source: T[], mapper: (item: T, idx: number, arr: T[]) => any): Promise<T[]> =>
  await Promise.all(source.map(mapper))
