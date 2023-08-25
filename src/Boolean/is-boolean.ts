/**
 * Check if it is a boolean value
 * - true: true、false
 * - false: 0、'true'...
 */
export const isBoolean = (val: any): boolean => val === true || val === false
