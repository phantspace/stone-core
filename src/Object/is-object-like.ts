/**
 * Check if it is a plain object
 * - true: Object, RegExp, other objects of function objects, Array (except host objects)
 * - false: Function, null, undefined, string, and other primitive data types
 */
export const isObjectLike = (val: any): boolean => !!val && typeof val === 'object'
