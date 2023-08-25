/**
 * Sorts an array of objects based on a specified key in descending order.
 */
export const sortBy = <T>(arr: T[], key: string): T[] =>
  arr.sort((a: T, b: T) => {
    let x = a[key]
    let y = b[key]

    return (x > y && -1) || (x < y && 1) || (y == null && -1) || (x == null && 1) || 0
  })
