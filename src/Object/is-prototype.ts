import { isFunction } from '../Function'
import { ObjectProto } from './_constant'

/**
 * Check if it is a prototype object.
 */
export const isPrototype = (val: any): boolean => {
  const Ctor = val && val.constructor
  const proto = (isFunction(Ctor) && Ctor.prototype) || ObjectProto

  return val === proto
}
