/**
 * 是否为数字类型
 * - true  数字、16进制、科学计数、小数点、负数、Infinity、NaN
 * - 这里不能把 NaN 判定为 false
 * - 按照 `ToNumber` 官方设定，undefined 会转为 NaN
 * - 而如果这里把 NaN 判定不为数值，则不符合转换
 */
export const isNumber = (val: any): boolean => typeof val === 'number'
