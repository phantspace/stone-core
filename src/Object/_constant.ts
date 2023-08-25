import { FuncToString } from '../Function/_constant'

export const ObjectProto = Object.prototype

export const ObjectToString = ObjectProto.toString

export const ObjectFunctionString = FuncToString.call(Object)

export const ObjectOwnPropertyNames = Object.getOwnPropertyNames

export const nativeObjectCreate = Object.create

/**
 * Return the prototype of the specified object (value of the internal [[Prototype]] property).
 */
export const getProto = (obj: any): {} =>
  // NOTE: In ES5.1, when using Object.getPrototypeOf(), the argument must be an object, otherwise an error will be thrown.
  Object.getPrototypeOf(Object(obj))

export const nativeObjectKeys = Object.keys

export const nativeFreeze = Object.freeze

export const nativeIsFreeze = Object.isFrozen
