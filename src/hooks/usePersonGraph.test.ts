import { act, renderHook, waitFor } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import usePersonGraph from './usePersonGraph'

import type { IFilm, IPerson } from '@/shared/interfaces'

describe('usePersonGraph', () => {
  const originalScreen = window.screen

  beforeEach(() => {
    vi.spyOn(Math, 'random').mockReturnValue(0.5)
    Object.defineProperty(window, 'screen', {
      value: { width: 1000 },
      configurable: true
    })
  })

  afterEach(() => {
    vi.restoreAllMocks()
    Object.defineProperty(window, 'screen', {
      value: originalScreen,
      configurable: true
    })
  })

  it('It returns empty nodes and edges as default', () => {
    const { result } = renderHook(() => usePersonGraph({}))
    expect(result.current.nodes).toEqual([])
    expect(result.current.edges).toEqual([])
  })

  it('It creates a main person node', async () => {
    const person = { id: 1, name: 'Luke Skywalker' } as unknown as IPerson

    const { result } = renderHook((props) => usePersonGraph(props), {
      initialProps: { personData: person }
    })

    await waitFor(() => {
      expect(result.current.nodes.length).toBe(1)
    })

    const [main] = result.current.nodes
    expect(main.id).toBe('1')
    expect(main.data.label).toBe('Luke Skywalker')

    expect(main.position).toEqual({ x: 425, y: 0 })
  })

  it('It adds a nodes with films and edges between person and films', async () => {
    const person = { id: 1, name: 'Luke' } as unknown as IPerson
    const films: IFilm[] = [
      { id: 10, title: 'A New Hope' } as IFilm,
      { id: 11, title: 'The Empire Strikes Back' } as IFilm
    ]

    const { result, rerender } = renderHook(
      (props: { personData: IPerson; filmsData: IFilm[] }) => usePersonGraph(props),
      {
        initialProps: { personData: person, filmsData: films }
      }
    )

    await act(async () => {
      rerender({ personData: person, filmsData: films })
    })

    await waitFor(() => {
      expect(result.current.nodes.length).toBe(3)

      expect(result.current.edges.length).toBe(2)
    })

    const edgeIds = result.current.edges.map((e) => e.id).sort()
    expect(edgeIds).toEqual(['1-10', '1-11'])

    const filmNodeIds = result.current.nodes.map((n) => n.id).sort()
    expect(filmNodeIds).toEqual(['1', '10', '11'])
    const filmLabels = result.current.nodes
      .filter((n) => n.id !== '1')
      .map((n) => n.data.label)
      .sort()
    expect(filmLabels).toEqual(['A New Hope', 'The Empire Strikes Back'])
  })

  it('It does not add any edges if there are no data', async () => {
    const { result } = renderHook(() => usePersonGraph({}))
    expect(result.current.nodes).toEqual([])
    expect(result.current.edges).toEqual([])

    const films: IFilm[] = [{ id: 10, title: 'A New Hope' } as IFilm]
    const { result: r2 } = renderHook(() => usePersonGraph({ filmsData: films }))
    await waitFor(() => {
      expect(r2.current.nodes.length).toBe(1)
      expect(r2.current.edges.length).toBe(1)
    })

    expect(r2.current.edges[0].source).toBeUndefined()
  })
})
