import { MAX_VALUE, MIN_VALUE, POSITIVE_INFINITY, NEGATIVE_INFINITY, nativeIsFinite } from './_constant'
import { toNumber } from './to-number'
import { isNumber } from './is-number'

/**
 * 是否为有限数
 * - true: 必须是一个有效数字
 * - false: NaN、正负无穷大
 * - 如果用原生的 isFinite，则[]、“”、null、布尔值会是 true；而原生 Number.isFinite 则是一样
 * @see http://www.ecma-international.org/ecma-262/6.0/#sec-number.isfinite
 */
export const isFinite = (val: any): boolean => isNumber(val) && nativeIsFinite(val)

/**
 * 转为有限数
 * - 返回必定是数值
 * - 会把 Infinity 转成数值
 * - 0、""、null、false、undefined、NaN 会转为 +0
 */
export const toFinite = (val: any): number => {
  // 先把不可转的类型转为 NaN
  val = toNumber(val)

  if (!val) return +0

  return val === POSITIVE_INFINITY || val === NEGATIVE_INFINITY ? (val > 0 ? MAX_VALUE : MIN_VALUE) : val
}
