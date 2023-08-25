/**
 * Intersection of arrays
 * - A & B -> ( xx ( oo ) xx )
 */
export const arrayIntersect = <T>(arrA: T[], arrB: T[]): T[] => [...new Set(arrA.filter(v => arrB.includes(v)))]
