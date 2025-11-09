import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import '@testing-library/jest-dom/vitest'
import { LoadingContainer } from './LoadingContainer'

describe('LoadingContainer', () => {
  it('It renders the loading container', () => {
    render(<LoadingContainer />)
    expect(screen.getByRole('status')).toBeInTheDocument()
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('It merges className with base classes', () => {
    const { container } = render(<LoadingContainer className='p-4 custom' />)
    const root = container.firstElementChild as HTMLElement

    expect(root).toHaveClass('w-full')
    expect(root).toHaveClass('h-full')
    expect(root).toHaveClass('flex')

    expect(root).toHaveClass('p-4')
    expect(root).toHaveClass('custom')
  })

  it('It forwards arbitrary div props (id, data-attrs, aria-attrs)', () => {
    const { container } = render(<LoadingContainer id='loader' data-testid='loading-container' aria-hidden={false} />)
    const root = container.firstElementChild as HTMLElement
    expect(root).toHaveAttribute('id', 'loader')
    expect(root).toHaveAttribute('data-testid', 'loading-container')
    expect(root).toHaveAttribute('aria-hidden', 'false')
  })

  it('It renders children if provided', () => {
    render(
      <LoadingContainer>
        <span data-testid='extra-child'>Extra child</span>
      </LoadingContainer>
    )
    expect(screen.queryByText(/extra child/i)).toBeNull()
    expect(screen.queryByTestId('extra-child')).toBeNull()
  })
})
