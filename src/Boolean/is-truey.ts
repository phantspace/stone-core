/**
 * truey
 * - true: '0', 0, false, 'false'
 * - false: ' ', [1]...
 */
export const isTruey = (val: any) => val === true || val === 'true' || val === 1 || val === '1'
