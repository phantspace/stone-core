import { nativeCeil } from '../Math'
/**
 * Split the array into blocks of maximum size and evenly distribute the elements within each block.
 * - maxChunkSize is less than 1, returns an empty array.
 */
export const chunkArray = <T>(items: T[], maxChunkSize: number): T[][] => {
  if (!(maxChunkSize >= 1)) return []
  if (items.length <= maxChunkSize) return [items]

  const chunkNum: number = nativeCeil(items.length / maxChunkSize)
  const chunkSize = nativeCeil(items.length / chunkNum)

  return [...Array(chunkNum).keys()].map(idx => items.slice(idx * chunkSize, idx * chunkSize + chunkSize))
}
