/**
 * Check if it is a Symbol
 */
export const isSymbol = (val: any): boolean => typeof val === 'symbol' // Using typeof directly is faster
