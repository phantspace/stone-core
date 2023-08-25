import { isFunction } from '../Function'
import { isNil } from '../Empty'

/**
 * Check if it is an array-like object
 * - It can be accessed by index and has a length property, but it doesn't necessarily have other array methods like push, forEach, indexOf, etc.
 * - The elements of the array are not necessarily tightly packed, and the 'index' don't have to be natural numbers. The number of 'index' doesn't have to be the same as the length.
 * - true: String, TypedArray, objects with length property, arrays
 * - false: {}...
 */
export const isArrayLike = (val: any): boolean =>
  // If you don't use !!val, an empty string ('') will be converted to false.
  !isNil(val) && val.length >= 0 && !isFunction(val)
