import { nativeIsArray } from './_constant'

/**
 * Checks whether a given value is an array
 * - true: [], Array.prototype
 * - fase: {}...
 */
export const isArray: (val: any) => boolean = nativeIsArray // IE9+，ES5.1
