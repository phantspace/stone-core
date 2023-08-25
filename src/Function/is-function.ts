import { baseTag, functionTag } from '../__Tag__'

/**
 * 是否为 Function 类型
 */
export const isFunction = (val: any): boolean => baseTag(val) === functionTag
