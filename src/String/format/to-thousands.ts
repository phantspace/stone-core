import { isNaN, isNumeric } from '../../Number'

/**
 * Convert to thousands separator.
 * - Empty string is returned for invalid values.
 * - Supports extremely large numbers.
 */
export const toThousands = (val: number | string, thousandSep: string = ',', decimalSep: string = '.'): string => {
  if (val == null || isNaN(val) || !isNumeric(val)) return ''

  let [prefix, num] = val.toString().split('-') || []
  let integerFormat = ''

  if (num) {
    prefix += '-'
  } else {
    num = prefix
    prefix = ''
  }

  let [integer, decimal = ''] = num.split('.') || []
  let len = integer.length

  if (decimal) {
    decimal = decimalSep + decimal
  }

  for (let i = 0; i < len; ++i) {
    if (i !== 0 && i % 3 === 0) {
      integerFormat = thousandSep + integerFormat
    }
    integerFormat = integer[len - i - 1] + integerFormat
  }

  return prefix + integerFormat + decimal
}
