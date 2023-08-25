import type { Object } from './_type'

/**
 * Filter the specified keys in the object and return a new object
 * @link <https://gist.github.com/bisubus/2da8af7e801ffd813fab7ac221aa7afc>
 */
export const omit = <T>(obj: Object<T>, keys: string[]) =>
  keys.reduce((target, key) => (delete target[key], target), { ...obj })
