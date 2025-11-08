import { describe, expect, it } from 'vitest'

import { cn } from './cn'

describe('cn (clsx + tailwind-merge)', () => {
  it('It returns empty string with no args', () => {
    expect(cn()).toBe('')
  })

  it('It joins simple class strings with spaces', () => {
    expect(cn('btn', 'btn-primary')).toBe('btn btn-primary')
  })

  it('It ignores falsy and undefined values', () => {
    expect(cn('a', null, undefined, false, 0 && 'zero', '', 'b')).toBe('a b')
  })

  it('It supports object syntax (truthy adds, falsy skips)', () => {
    expect(cn({ 'font-bold': true, italic: false }, 'mt-2')).toBe('font-bold mt-2')
  })

  it('It supports nested arrays/tuples', () => {
    expect(cn(['p-2', ['m-1', ['block']]])).toBe('p-2 m-1 block')
  })

  it('It merges conflicting Tailwind spacing (last wins)', () => {
    expect(cn('p-2', 'p-4')).toBe('p-4')
    expect(cn('px-2', 'px-6')).toBe('px-6')
  })

  it('It merges conflicting Tailwind color utilities (last wins)', () => {
    expect(cn('text-red-500', 'text-blue-500')).toBe('text-blue-500')
    expect(cn('bg-red-500', 'bg-blue-500', 'bg-green-500')).toBe('bg-green-500')
  })

  it('It merges variants and modifiers correctly', () => {
    expect(cn('hover:bg-red-500', 'hover:bg-blue-500')).toBe('hover:bg-blue-500')
    expect(cn('sm:p-2', 'sm:p-4')).toBe('sm:p-4')
    expect(cn('sm:text-sm', 'md:text-base', 'md:text-lg')).toBe('sm:text-sm md:text-lg')
  })

  it('handles arbitrary values and keeps the last one', () => {
    expect(cn('bg-[rgb(0,0,0)]', 'bg-[rgb(10,10,10)]')).toBe('bg-[rgb(10,10,10)]')
    expect(cn('w-[120px]', 'w-[240px]')).toBe('w-[240px]')
  })

  it('preserves non-tailwind custom classes along with tailwind ones', () => {
    const result = cn('my-custom', 'p-2', 'another-class')
    expect(result.split(' ').sort()).toEqual(['another-class', 'my-custom', 'p-2'].sort())
  })

  it('resolves conditional precedence (later truthy wins)', () => {
    const cond = true
    expect(cn('p-2', cond && 'p-4')).toBe('p-4')
    const cond2 = false
    expect(cn('p-2', cond2 && 'p-4')).toBe('p-2')
  })
})
