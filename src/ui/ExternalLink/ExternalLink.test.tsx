import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import '@testing-library/jest-dom/vitest'
import ExternalLink from './ExternalLink'

afterEach(() => cleanup())

describe('ExternalLink', () => {
  it('It renders children and points to provided href', () => {
    render(<ExternalLink href='https://example.com'>Example</ExternalLink>)
    const link = screen.getByRole('link', { name: 'Example' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://example.com')
  })

  it('It applies base classes from cva', () => {
    render(<ExternalLink href='#'>Base</ExternalLink>)
    const link = screen.getByRole('link', { name: 'Base' })
    expect(link).toHaveClass('transition-all', 'duration-200', 'ease-in-out')
  })

  it('It uses default variant classes when no variant provided', () => {
    render(<ExternalLink href='#'>Default</ExternalLink>)
    const link = screen.getByRole('link', { name: 'Default' })
    expect(link).toHaveClass('hover:opacity-70')
  })

  it('It applies button variant classes and not default hover class', () => {
    render(
      <ExternalLink href='#' variant='button'>
        Btn
      </ExternalLink>
    )
    const link = screen.getByRole('link', { name: 'Btn' })
    expect(link).toHaveClass(
      'inline-flex',
      'items-center',
      'gap-1',
      'rounded-lg',
      'border',
      'border-neutral-800',
      'px-3',
      'py-1.5',
      'text-neutral-200',
      'transition',
      'hover:border-neutral-600'
    )
    expect(link).not.toHaveClass('hover:opacity-70')
  })

  it('It merges custom className with computed classes', () => {
    render(
      <ExternalLink href='#' className='custom extra'>
        Mix
      </ExternalLink>
    )
    const link = screen.getByRole('link', { name: 'Mix' })
    expect(link).toHaveClass('transition-all', 'duration-200', 'ease-in-out')
    expect(link).toHaveClass('custom', 'extra')
  })

  it('It forces target="_blank" and rel="noreferrer" even if overridden by props', () => {
    render(
      <ExternalLink href='#' target='_self' rel='noopener'>
        Force
      </ExternalLink>
    )
    const link = screen.getByRole('link', { name: 'Force' })
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noreferrer')
  })
})
