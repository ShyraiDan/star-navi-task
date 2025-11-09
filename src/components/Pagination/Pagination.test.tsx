import { createMemoryHistory } from '@tanstack/history'
import { createRootRoute, createRoute, createRouter, RouterProvider } from '@tanstack/react-router'
import '@testing-library/jest-dom/vitest'
import { render } from '@testing-library/react'
import React from 'react'
import { describe, expect, it } from 'vitest'

import { Pagination } from '@/components/Pagination/Pagination'

function renderWithRouter(ui: React.ReactNode, initialPath = '/') {
  const rootRoute = createRootRoute({ component: () => <>{ui}</> })
  const peopleRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/people',
    component: () => null
  })
  const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: () => <>{ui}</>
  })

  const router = createRouter({
    routeTree: rootRoute.addChildren([indexRoute, peopleRoute]),
    history: createMemoryHistory({ initialEntries: [initialPath] })
  })

  return render(<RouterProvider router={router} />)
}

describe('Pagination', () => {
  it('It renders nothing when totalPages <= 1', () => {
    const { container: c1 } = renderWithRouter(<Pagination currentPage={1} totalPages={1} />)
    expect(c1.firstChild).toBeNull()

    const { container: c2 } = renderWithRouter(<Pagination currentPage={1} totalPages={0} />)
    expect(c2.firstChild).toBeNull()
  })
})
