/**
 * 是否为 null 或 undefined
 * - 针对不存在或未初始化的值
 * @alias isUndefinedOrNull
 */
export const isNil = (val: any): boolean => val == null

/**
 * 是否为 Null
 */
export const isNull = (val: any): boolean => val === null

/**
 * 是否为 undefined
 * - undefined 不是关键字，可以被当成变量，因此，ES5之前、非严格模式下、局部变量下 undefined 可以被重写
 * - void 始终返回 undefined，因此 void 0 -> undefined
 * - 当 a === undefined 中 a 没被声明时，会抛出错误 ReferenceError
 */
export const isUndefined = (val: any): boolean => val === void 0
