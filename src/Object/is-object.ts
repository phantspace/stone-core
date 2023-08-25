/**
 * NOTE:
 * If you use baseTag( val ) === '[object object]', window, document, etc., will be evaluated as false.
 * null and undefined will return {}.
 * Through object wrappers, an object corresponding to the given value's type is returned.
 */

/**
 * Check if it is an Object
 * - true: Function, Object, Array
 * - false: null, undefined...
 */
export const isObject = (val: any): boolean =>
  !!val &&
  // NOTE: Equivalent to typeof val === 'object' || typeof val === 'function', both have similar efficiency.
  Object(val) === val
