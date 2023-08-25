import { ObjectToString } from '../Object/_constant'

/**
 * NOTE:
 *   typeof only supports number, string, boolean, undefined, symbol, host objects, object, and function.
 *   toString.call supports all types.
 *   constructor.name directly returns the type, but it cannot be null or undefined.
 * Efficiency comparison in Chrome:
 * | Function         | toString.call | typeof	| constructor.name
 * | ArrayLikeObject	| 145			      | 778		  | 55
 * | number			      | 140			      | 731		  | 54
 * | window			      | 9				      | 676		  | 37
 */

/**
 * Get the name of the built-in type.
 */
export const baseTag = (val: any): string => ObjectToString.call(val)
