import { isFinite } from './finite'
import { isNaN } from './is-nan'

/**
 * Determine if it is a valid numeric value
 * - true for numbers, hexadecimal values, scientific notation, decimal points, and negative numbers
 */
export const isValidNumber = (val: any): boolean => isFinite(val) && !isNaN(val)
