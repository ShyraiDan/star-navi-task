import { act, renderHook, waitFor } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import useHeroGraph from './useHeroGraph'

import type { IFilm, IHero } from '@/shared/interfaces'

describe('useHeroGraph', () => {
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
    const { result } = renderHook(() => useHeroGraph({}))
    expect(result.current.nodes).toEqual([])
    expect(result.current.edges).toEqual([])
  })

  it('It creates a main hero node', async () => {
    const hero = { id: 1, name: 'Luke Skywalker' } as unknown as IHero

    const { result } = renderHook((props) => useHeroGraph(props), {
      initialProps: { heroData: hero }
    })

    await waitFor(() => {
      expect(result.current.nodes.length).toBe(1)
    })

    const [main] = result.current.nodes
    expect(main.id).toBe('1')
    expect(main.data.label).toBe('Luke Skywalker')

    expect(main.position).toEqual({ x: 425, y: 0 })
  })

  it('It adds a nodes with films and edges between hero and films', async () => {
    const hero = { id: 1, name: 'Luke' } as unknown as IHero
    const films: IFilm[] = [
      { id: 10, title: 'A New Hope' } as IFilm,
      { id: 11, title: 'The Empire Strikes Back' } as IFilm
    ]

    const { result, rerender } = renderHook((props: { heroData: IHero; filmsData: IFilm[] }) => useHeroGraph(props), {
      initialProps: { heroData: hero, filmsData: films }
    })

    await act(async () => {
      rerender({ heroData: hero, filmsData: films })
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
    const { result } = renderHook(() => useHeroGraph({}))
    expect(result.current.nodes).toEqual([])
    expect(result.current.edges).toEqual([])

    const films: IFilm[] = [{ id: 10, title: 'A New Hope' } as IFilm]
    const { result: r2 } = renderHook(() => useHeroGraph({ filmsData: films }))
    await waitFor(() => {
      expect(r2.current.nodes.length).toBe(1)
      expect(r2.current.edges.length).toBe(1)
    })

    expect(r2.current.edges[0].source).toBeUndefined()
  })
})
