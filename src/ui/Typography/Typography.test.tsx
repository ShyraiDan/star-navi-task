import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import '@testing-library/jest-dom/vitest'
import { H1, H2, H3, H4, H5, H6, P, Span } from './Typography'

afterEach(() => cleanup())

/**
 * H1 tests
 */

describe('H1', () => {
  it('It renders children and has heading role level 1', () => {
    render(<H1>My Title</H1>)
    const heading = screen.getByRole('heading', { level: 1, name: 'My Title' })
    expect(heading).toBeInTheDocument()
  })

  it('It applies base classes', () => {
    render(<H1>Title</H1>)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveClass('font-bold')
    expect(heading).toHaveClass('text-4xl')
    expect(heading).toHaveClass('text-primary')
    expect(heading).toHaveClass('xl:text-[36px]')
  })

  it('It merges custom className with base classes', () => {
    render(<H1 className='tracking-tight custom'>Title</H1>)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveClass('font-bold', 'text-4xl', 'text-primary', 'xl:text-[36px]')
    expect(heading).toHaveClass('tracking-tight', 'custom')
  })

  it('It uses an h1 tag as the root element', () => {
    render(<H1>Title</H1>)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.tagName.toLowerCase()).toBe('h1')
  })

  it('It exposes displayName = "H1"', () => {
    expect(H1.displayName).toBe('H1')
  })

  it('It does NOT forward arbitrary props (they are ignored)', () => {
    render(<H1 data-testid='title'>Title</H1>)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).not.toHaveAttribute('data-testid')
  })
})

/**
 * H2 tests
 */

describe('H2', () => {
  it('It renders children and has heading role level 2', () => {
    render(<H2>My Title</H2>)
    const heading = screen.getByRole('heading', { level: 2, name: 'My Title' })
    expect(heading).toBeInTheDocument()
  })

  it('It applies base classes', () => {
    render(<H2>Title</H2>)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveClass('font-bold')
    expect(heading).toHaveClass('text-3xl')
    expect(heading).toHaveClass('text-primary')
  })

  it('It merges custom className with base classes', () => {
    render(<H2 className='tracking-tight custom'>Title</H2>)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveClass('font-bold', 'text-3xl', 'text-primary')
    expect(heading).toHaveClass('tracking-tight', 'custom')
  })

  it('It uses an h2 tag as the root element', () => {
    render(<H2>Title</H2>)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.tagName.toLowerCase()).toBe('h2')
  })

  it('It exposes displayName = "H2"', () => {
    expect(H2.displayName).toBe('H2')
  })

  it('It does NOT forward arbitrary props (they are ignored)', () => {
    render(<H2 data-testid='title'>Title</H2>)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).not.toHaveAttribute('data-testid')
  })
})

/**
 * H3 tests
 */

describe('H3', () => {
  it('It renders children and has heading role level 3', () => {
    render(<H3>My Title</H3>)
    const heading = screen.getByRole('heading', { level: 3, name: 'My Title' })
    expect(heading).toBeInTheDocument()
  })

  it('It applies base classes', () => {
    render(<H3>Title</H3>)
    const heading = screen.getByRole('heading', { level: 3 })
    expect(heading).toHaveClass('font-bold')
    expect(heading).toHaveClass('text-2xl')
    expect(heading).toHaveClass('text-primary')
  })

  it('It merges custom className with base classes', () => {
    render(<H3 className='tracking-tight custom'>Title</H3>)
    const heading = screen.getByRole('heading', { level: 3 })
    expect(heading).toHaveClass('font-bold', 'text-2xl', 'text-primary')
    expect(heading).toHaveClass('tracking-tight', 'custom')
  })

  it('It uses an h3 tag as the root element', () => {
    render(<H3>Title</H3>)
    const heading = screen.getByRole('heading', { level: 3 })
    expect(heading.tagName.toLowerCase()).toBe('h3')
  })

  it('It exposes displayName = "H3"', () => {
    expect(H3.displayName).toBe('H3')
  })

  it('It does NOT forward arbitrary props (they are ignored)', () => {
    render(<H3 data-testid='title'>Title</H3>)
    const heading = screen.getByRole('heading', { level: 3 })
    expect(heading).not.toHaveAttribute('data-testid')
  })
})

/**
 * H4 tests
 */

describe('H4', () => {
  it('It renders children and has heading role level 4', () => {
    render(<H4>My Title</H4>)
    const heading = screen.getByRole('heading', { level: 4, name: 'My Title' })
    expect(heading).toBeInTheDocument()
  })

  it('It applies base classes', () => {
    render(<H4>Title</H4>)
    const heading = screen.getByRole('heading', { level: 4 })
    expect(heading).toHaveClass('font-bold')
    expect(heading).toHaveClass('text-xl')
    expect(heading).toHaveClass('text-primary')
  })

  it('It merges custom className with base classes', () => {
    render(<H4 className='tracking-tight custom'>Title</H4>)
    const heading = screen.getByRole('heading', { level: 4 })
    expect(heading).toHaveClass('font-bold', 'text-xl', 'text-primary')
    expect(heading).toHaveClass('tracking-tight', 'custom')
  })

  it('It uses an h4 tag as the root element', () => {
    render(<H4>Title</H4>)
    const heading = screen.getByRole('heading', { level: 4 })
    expect(heading.tagName.toLowerCase()).toBe('h4')
  })

  it('It exposes displayName = "H4"', () => {
    expect(H4.displayName).toBe('H4')
  })

  it('It does NOT forward arbitrary props (they are ignored)', () => {
    render(<H4 data-testid='title'>Title</H4>)
    const heading = screen.getByRole('heading', { level: 4 })
    expect(heading).not.toHaveAttribute('data-testid')
  })
})

/**
 * H5 tests
 */

describe('H5', () => {
  it('It renders children and has heading role level 5', () => {
    render(<H5>My Title</H5>)
    const heading = screen.getByRole('heading', { level: 5, name: 'My Title' })
    expect(heading).toBeInTheDocument()
  })

  it('It applies base classes', () => {
    render(<H5>Title</H5>)
    const heading = screen.getByRole('heading', { level: 5 })
    expect(heading).toHaveClass('font-regular')
    expect(heading).toHaveClass('text-xl')
    expect(heading).toHaveClass('text-primary')
  })

  it('It merges custom className with base classes', () => {
    render(<H5 className='tracking-tight custom'>Title</H5>)
    const heading = screen.getByRole('heading', { level: 5 })
    expect(heading).toHaveClass('font-regular', 'text-xl', 'text-primary')
    expect(heading).toHaveClass('tracking-tight', 'custom')
  })

  it('It uses an h5 tag as the root element', () => {
    render(<H5>Title</H5>)
    const heading = screen.getByRole('heading', { level: 5 })
    expect(heading.tagName.toLowerCase()).toBe('h5')
  })

  it('It exposes displayName = "H5"', () => {
    expect(H5.displayName).toBe('H5')
  })

  it('It does NOT forward arbitrary props (they are ignored)', () => {
    render(<H5 data-testid='title'>Title</H5>)
    const heading = screen.getByRole('heading', { level: 5 })
    expect(heading).not.toHaveAttribute('data-testid')
  })
})

/**
 * H6 tests
 */

describe('H6', () => {
  it('It renders children and has heading role level 6', () => {
    render(<H6>My Title</H6>)
    const heading = screen.getByRole('heading', { level: 6, name: 'My Title' })
    expect(heading).toBeInTheDocument()
  })

  it('It applies base classes', () => {
    render(<H6>Title</H6>)
    const heading = screen.getByRole('heading', { level: 6 })
    expect(heading).toHaveClass('font-primary')
    expect(heading).toHaveClass('text-lg')
    expect(heading).toHaveClass('text-primary')
  })

  it('It merges custom className with base classes', () => {
    render(<H6 className='tracking-tight custom'>Title</H6>)
    const heading = screen.getByRole('heading', { level: 6 })
    expect(heading).toHaveClass('font-bold', 'text-lg', 'text-primary')
    expect(heading).toHaveClass('tracking-tight', 'custom')
  })

  it('It uses an h6 tag as the root element', () => {
    render(<H6>Title</H6>)
    const heading = screen.getByRole('heading', { level: 6 })
    expect(heading.tagName.toLowerCase()).toBe('h6')
  })

  it('It exposes displayName = "H6"', () => {
    expect(H6.displayName).toBe('H6')
  })

  it('It does NOT forward arbitrary props (they are ignored)', () => {
    render(<H6 data-testid='title'>Title</H6>)
    const heading = screen.getByRole('heading', { level: 6 })
    expect(heading).not.toHaveAttribute('data-testid')
  })
})

/**
 * P tests
 */

describe('P', () => {
  it('renders children text', () => {
    const { getByText } = render(<P>Hello world</P>)
    expect(getByText('Hello world')).toBeInTheDocument()
  })

  it('applies base class', () => {
    const { getByText } = render(<P>Base</P>)
    const el = getByText('Base')
    expect(el).toHaveClass('font-primary')
  })

  it('merges custom className', () => {
    const { getByText } = render(<P className='text-sm custom'>Text</P>)
    const el = getByText('Text')
    expect(el).toHaveClass('font-primary')
    expect(el).toHaveClass('text-sm', 'custom')
  })

  it('uses a <p> tag as the root element', () => {
    const { getByText } = render(<P>Paragraph</P>)
    const el = getByText('Paragraph')
    expect(el.tagName.toLowerCase()).toBe('p')
  })

  it('exposes displayName = "P"', () => {
    expect(P.displayName).toBe('P')
  })

  it('does NOT forward arbitrary props (ignored)', () => {
    const { getByText } = render(<P data-testid='para'>No forward</P>)
    const el = getByText('No forward')
    expect(el).not.toHaveAttribute('data-testid')
  })
})

/**
 * Span tests
 */

describe('Span', () => {
  it('renders children', () => {
    const { getByText } = render(<Span>Hello</Span>)
    expect(getByText('Hello')).toBeInTheDocument()
  })

  it('applies base class', () => {
    const { getByText } = render(<Span>Base</Span>)
    const el = getByText('Base')
    expect(el).toHaveClass('font-primary')
  })

  it('merges custom className with base class', () => {
    const { getByText } = render(<Span className='text-sm custom'>Text</Span>)
    const el = getByText('Text')
    expect(el).toHaveClass('font-primary')
    expect(el).toHaveClass('text-sm', 'custom')
  })

  it('uses a <span> tag as the root element', () => {
    const { getByText } = render(<Span>Tag</Span>)
    const el = getByText('Tag')
    expect(el.tagName.toLowerCase()).toBe('span')
  })

  it('exposes displayName = "Span"', () => {
    expect(Span.displayName).toBe('Span')
  })

  it('does NOT forward arbitrary props (ignored)', () => {
    const { getByText } = render(<Span data-testid='s'>No forward</Span>)
    const el = getByText('No forward')
    expect(el).not.toHaveAttribute('data-testid')
  })
})
