import { isObject } from '../Object'
import { isFunction } from '../Function'
import { isSymbol } from '../Symbol'
import { isNumber } from './is-number'

/**
 * Convert to a numeric value
 * - If the conversion is not possible, it results in NaN. NaN does not convert to 0.
 * - Infinity and -Infinity do not convert to specific numbers.
 * - The unary plus operator is the fastest and recommended method to convert other objects to numbers, but there are limits.
 * @see <http://ecma-international.org/ecma-262/7.0/#sec-tonumber|ToNumber>
 */
export const toNumber = (val: any): number => {
  if (isNumber(val)) return val
  if (isSymbol(val)) return NaN
  if (isObject(val)) {
    const oth = isFunction(val.valueOf) ? val.valueOf() : val
    val = isObject(oth) ? oth + '' : oth
  }

  return +val
}
