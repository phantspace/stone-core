import { isNumber } from './is-number'
import { nativeIsNaN } from './_constant'

/**
 * 是否为 NaN
 * - 这里的定义会出现混淆，优先按照标准
 * - true  NaN、Number.NaN、0 / 0
 * - false 空数组、空字符串、对象、null、布尔值、undefined、数字、16进制、科学计数、小数点、负数、Infinity、数字字符串
 * - isNaN与isNumeric的区别，在于[ 0 ]、Infinity、'2017/04/10'、'2017-04-10'会被 isNaN 认为是数字，而 isNumeric 认为不是
 * - 不能用 ==、=== 来判断是否为 NaN
 * - val !== val 为 true 的表达式，只有NaN
 * - Number.isNaN不会强制将参数转换成数字，只有在参数是真正的数字类型，且值为 NaN 的时候才会返回 true
 * - 对 Map、Set 等类型判定为 false
 * @see <http://www.ecma-international.org/ecma-262/6.0/#sec-isnan-number|isNaN>
 */
export const isNaN = (val: any): boolean => isNumber(val) && nativeIsNaN(val)
