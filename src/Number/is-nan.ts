import { isNumber } from './is-number'
import { nativeIsNaN } from './_constant'

/**
 * Whether it is NaN
 * - true: for NaN, Number.NaN, 0 / 0
 * - false: for empty arrays, empty strings, objects, null, boolean values, undefined, numbers, hexadecimal values, scientific notation, decimal points, negative numbers, Infinity, numeric strings
 * - There can be confusion with the definition here, so it is best to follow the standard
 * - The difference between isNaN and isNumeric is that [ 0 ], Infinity, '2017/04/10', '2017-04-10' are considered numbers by isNaN, but not by isNumeri
 * - NaN cannot be determined using == or ===
 * - The expression val !== val evaluates to true only for NaN
 * - Number.isNaN does not coerce the parameter into a number, it only returns true if the parameter is a true numeric type and has a value of NaN
 * - Map, Set, and similar types are considered false.
 * @see <http://www.ecma-international.org/ecma-262/6.0/#sec-isnan-number|isNaN>
 */
export const isNaN = (val: any): boolean => isNumber(val) && nativeIsNaN(val)
