/**
 * Whether it is a numeric type
 * - true for numbers, hexadecimal values, scientific notation, decimal points, negative numbers, Infinity, NaN
 * -  NaN should not be considered false here
 * - According to the official specification of ToNumber, undefined is converted to NaN
 * - If NaN is not considered a numeric value here, it would not comply with the conversion rules
 */
export const isNumber = (val: any): boolean => typeof val === 'number'
