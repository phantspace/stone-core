export const MAX_VALUE: number = Number.MAX_VALUE

export const MIN_VALUE: number = Number.MIN_VALUE

/**
 * 最大的安全整数
 * - Math.pow(2, 53) - 1
 */
export const MAX_SAFE_INTEGER: number = Number.MAX_SAFE_INTEGER

/**
 * 最小的安全整数
 * -( Math.pow(2, 53) - 1 )
 */
export const MIN_SAFE_INTEGER: number = Number.MIN_SAFE_INTEGER

/**
 * 无符号整数的最大值
 * - Math.pow(2, 32) - 1
 */
export const MAX_UINT32_INTEGER: number = 4294967295

/**
 * 最大整数
 * 使用位运算符的最大限制
 * - Math.pow( 2, 31 ) - 1
 */
export const MAX_INT32: number = 2147483647

/**
 * 最小整数
 * - -Math.pow( 2, 31 )
 */
export const MIN_INT32: number = -2147483648

export const POSITIVE_INFINITY: number = Number.POSITIVE_INFINITY

export const NEGATIVE_INFINITY: number = Number.NEGATIVE_INFINITY

export const nativeParseInt: (string: string, radix?: number) => number = parseInt

export const nativeParseFloat: (string: string) => number = parseFloat

export const nativeIsNaN: (number: any) => boolean = Number.isNaN

export const nativeIsFinite: (number: any) => boolean = Number.isFinite

export const nativeIsInteger: (number: any) => boolean = Number.isInteger

export const nativeIsSafeInteger: (number: any) => boolean = Number.isSafeInteger

// Number.MAX_VALUE 位数 - Number.MAX_SAFE_INTEGER 位数，得出安全范围内的小数长度
export const MAX_SAFE_PRECISION_LENGTH: number = 292
