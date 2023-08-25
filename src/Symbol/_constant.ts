/**
 * Symbol
 * - ES6 支持
 * @see <https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator>
 */
export const symIterator = Symbol ? Symbol.iterator : undefined

export const symbolProto = Symbol ? Symbol.prototype : undefined

export const symbolToString = symbolProto ? symbolProto.toString : undefined
