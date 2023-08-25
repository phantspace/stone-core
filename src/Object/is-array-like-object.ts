import { isObjectLike } from './is-object-like'

/**
 * Check if it is an array-like object.
 * - true: Objects with a length property, arrays
 * - false: {}, string...
 */
export const isArrayLikeObject = (val: any): boolean => isObjectLike(val) && val.length >= 0
