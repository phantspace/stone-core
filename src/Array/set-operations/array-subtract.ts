/**
 * The set of elements that belong to A and do not belong to B
 * - A - B -> ( oo ( xx ) xx )
 */
export const arraySubtract = <T>(arrA: T[], arrB: T[]): T[] => {
  // Avoiding duplicate elements in arrB to prevent splice offset issues
  const noRepeatedSourceArr = new Set([...arrB])

  return [...new Set([...noRepeatedSourceArr, ...arrA])].splice(noRepeatedSourceArr.size)
}
