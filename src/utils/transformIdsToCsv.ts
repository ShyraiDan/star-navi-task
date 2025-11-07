/**
 * Function that transforms an array of ids to a string of ids
 * @param arr - an array of IDs of the entities
 * @returns A string of ids
 * @example
 * transformIdsToCsv([1,3,6]);
 */
export const transformIdsToCsv = (arr: number[]): string => arr.filter((x) => Number.isFinite(x)).join(',')
