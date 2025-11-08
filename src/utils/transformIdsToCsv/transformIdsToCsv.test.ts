import { describe, expect, it } from 'vitest'

import { transformIdsToCsv } from './transformIdsToCsv'

describe('transformIdsToCsv', () => {
  it('It returns empty string for empty array', () => {
    expect(transformIdsToCsv([])).toBe('')
  })

  it('It filters NaN/Infinity/-Infinity and joins them with comma', () => {
    const input = [1, Number.NaN, 2, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, 3]
    expect(transformIdsToCsv(input)).toBe('1,2,3')
  })

  it('It saves order of elements', () => {
    expect(transformIdsToCsv([3, 1, 2])).toBe('3,1,2')
  })

  it('It works with negative numbers and floats', () => {
    expect(transformIdsToCsv([-1, 2.5, 3])).toBe('-1,2.5,3')
  })

  it('It does not modify original array', () => {
    const original = [1, Number.NaN, 2]
    const snapshot = [...original]
    transformIdsToCsv(original)
    expect(original).toEqual(snapshot)
  })

  it('It works with big numbers', () => {
    expect(transformIdsToCsv([9007199254740991, 2])).toBe('9007199254740991,2')
  })
})
