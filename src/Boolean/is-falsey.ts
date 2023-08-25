/**
 * falsey
 * - true: '0', 0, false, 'false'
 * - false: +0, '-0'...
 */
export const isFalsey = (val: any) => val === false || val === 'false' || val === 0 || val === '0'
