/**
 * asynchronous arr each
 * - The assertion can be made by returning false from the iteratee.
 * - Return the arr itself.
 */
export const asyncEach = async <T>(
  arr: T[],
  iteratee?: (item: T, idx: number, arr: T[]) => Promise<boolean>,
): Promise<T[]> => {
  const len = arr.length
  let idx = 0

  while (idx < len) {
    if ((await iteratee(arr[idx], idx++, arr)) === false) break
  }

  return arr
}
