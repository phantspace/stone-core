import { baseTag, objectTag } from '../__Tag__'

/**
 * Check if it is a prototype object (JSON)
 * @alias isJson
 */
export const isPlainObject = (val: any): boolean => baseTag(val) === objectTag
