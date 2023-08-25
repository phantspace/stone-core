import { nativeParseFloat } from './_constant'
import { isString } from '../String/is-string'
import { isNumber } from './is-number'

/**
 * Determine if it is a numeric value or a string representing a numeric value
 * - true for numbers, numeric strings, hexadecimal values, scientific notation, decimal points, and negative numbers
 * - false for NaN, Infinity, non-numeric strings, etc.
 * - Exclude arrays, as they can be parsed using parseFloat and subtraction
 */
export const isNumeric = (val: any): boolean => (isNumber(val) || isString(val)) && val - nativeParseFloat(val) + 1 >= 0
