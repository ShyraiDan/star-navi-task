import '@testing-library/jest-dom/vitest'
import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Container } from '@/ui/Container/Container'

describe('Container', () => {
  it('It renders children', () => {
    render(
      <Container data-testid='container'>
        <span>Inner content</span>
      </Container>
    )
    const root = screen.getByTestId('container')
    expect(root).toBeInTheDocument()
    expect(within(root).getByText('Inner content')).toBeInTheDocument()
  })

  it('It applies base classes', () => {
    const { container } = render(<Container />)
    const root = container.firstElementChild as HTMLElement
    expect(root).toHaveClass('p-8')
    expect(root).toHaveClass('min-h-[calc(100vh-60px-64px)]')
    expect(root).toHaveClass('xl:max-w-[1200px]')
    expect(root).toHaveClass('xl:mx-auto')
  })

  it('It merges user className with base classes', () => {
    const { container } = render(<Container className='bg-red-500 custom' />)
    const root = container.firstElementChild as HTMLElement
    expect(root).toHaveClass('p-8')
    expect(root).toHaveClass('bg-red-500', 'custom')
  })

  it('It forwards arbitrary div props', () => {
    render(<Container id='root-container' aria-label='main container' role='region' />)

    const root = screen.getByRole('region', { name: /main container/i })
    expect(root).toHaveAttribute('id', 'root-container')
    expect(root).toHaveAttribute('aria-label', 'main container')
    expect(root).toHaveAttribute('role', 'region')
  })

  it('It uses a div as the root element', () => {
    const { container } = render(<Container />)
    const root = container.firstElementChild as HTMLElement
    expect(root?.tagName.toLowerCase()).toBe('div')
  })
})
