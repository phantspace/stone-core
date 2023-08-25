import { ArrayProto } from './_constant'

/**
 * Return a new array after merging multiple data
 */
export const concat = <T>(...args: any): T[] => ArrayProto.concat.apply([], args)
