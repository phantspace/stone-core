import { arrayUnion } from './array-union'

/**
 * difference of arrays
 * - A ^ B -> ( oo ( xx ) oo )
 * @alias arrayDifference
 */
export const arrayExclusiveOr = <T>(arrA: T[], arrB: T[]): T[] =>
  arrayUnion<T>(arrA, arrB).filter(v => !arrA.includes(v) || !arrB.includes(v))
