/**
 * Union of arrays
 * - A | B -> ( oo ( oo ) oo  )
 */
export const arrayUnion = <T>(...arguments_: any[]): T[] => [...new Set(arguments_.flat())]
