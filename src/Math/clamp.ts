/**
 * Limit the value within a lower and upper bound
 * - If the value is smaller than the lower bound, use the lower bound
 * - If the value is between the lower and upper bounds, use the value itself
 * - If the value is greater than the upper bound, use the upper bound
 * - For efficiency, do not forcibly convert num, lower, and upper to numbers
 * - If the value is NaN, return NaN
 */
export const clamp = (num: number, lower: number, upper: number): number => {
  // Not NaN
  if (num === num) {
    // The true process is not executed for num, lower, and upper values.
    if (num < lower) {
      num = lower
    } else if (num > upper) {
      num = upper
    }
  }

  return num
}
