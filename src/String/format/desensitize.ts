import { nativeMin } from '../../Math'

interface DesensitizeConfig {
  prePlainLength?: number // Length of the prefix
  sufPlainLength?: number // Length of the suffix
  maskLength?: number // Length of the masked portion
  maskSymbol?: string // Symbol used for masking
}

/**
 * String anonymization
 */
export const desensitize = (
  val: string,
  { prePlainLength = 2, sufPlainLength = 2, maskLength = 4, maskSymbol = '*' }: DesensitizeConfig = {}
): string => {
  const reg = new RegExp(`(.{${prePlainLength}})(.*)(.{${nativeMin(val.length - prePlainLength, sufPlainLength)}})`)

  return val.replace(reg, (match, before, maskPart, after) => {
    return before +
      (maskLength > 0
        ? maskSymbol.repeat(maskLength)
        : maskPart
            .split('')
            .map(() => maskSymbol)
            .join('')) +
      after
  })
}
