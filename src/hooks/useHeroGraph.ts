import { useEffect, useState } from 'react'

import type { IFilm, IHero, IStarship } from '@/shared/interfaces'
import type { Edge, Node } from '@xyflow/react'

interface UseHeroGraphParams {
  heroData?: IHero
  filmsData?: IFilm[]
  starshipsData?: IStarship[]
}

/**
 * Setup initial nodes and edges
 */
const initialNodes: Node[] = []
const initialEdges: Edge[] = []

/**
 * A hook that sets up a graph of a hero's related films and starships.
 * It takes in the hero's data, films data, and starships data as props.
 * It uses the XYFlow library to create nodes and edges for the graph.
 * The nodes represent the hero, films, and starships, and the edges represent the relationships between them.
 * The graph is updated dynamically based on the data fetched from the API.
 * @param {heroData} heroData - The hero's data.
 * @param {filmsData} filmsData - The films's data.
 * @param {starshipsData} starshipsData - The starships's data.
 * @returns {nodes: Node[], edges: Edge[]} - The nodes and edges for the graph.
 */
const useHeroGraph = ({ heroData, filmsData, starshipsData }: UseHeroGraphParams) => {
  const [nodes, setNodes] = useState(initialNodes)
  const [edges, setEdges] = useState(initialEdges)

  /**
   * This Effect creates a main node for the hero
   */
  useEffect(() => {
    if (!heroData) {
      return
    }

    setNodes([
      {
        id: `${heroData?.id}`,
        data: { label: heroData?.name },
        position: { x: (window.screen.width - 150) / 2, y: 0 },
        style: { fontSize: '20px', fontWeight: '600', color: 'black' }
      }
    ])
  }, [heroData])

  /**
   * This Effect creates a film nodes and edges
   */
  useEffect(() => {
    if (!filmsData) {
      return
    }

    /**
     * Here we create a node for each film. To place them properly we need to use Math.random() and add a small offset.
     */
    const filmNodes = filmsData?.map((film: IFilm, idx: number) => ({
      id: `${film.id}`,
      data: { label: film.title },
      position: {
        x: Math.random() + idx * 200,
        y: Math.random() + 200
      },
      style: { fontSize: '20px', fontWeight: '600', color: 'black' }
    })) as Node[]

    /**
     * Here we create a edge between each film and main node.
     */
    const filmEdges = filmsData?.map((film: IFilm) => ({
      id: `${heroData?.id}-${film.id}`,
      source: heroData?.id.toString(),
      target: `${film.id}`,
      label: 'film',
      type: 'straight'
    })) as Edge[]

    /**
     * Getting previously created nodes and edges and adding new ones
     */
    setNodes((nodes) => [...nodes, ...filmNodes])
    setEdges((edges) => [...edges, ...filmEdges])
  }, [filmsData, heroData?.id])

  /**
   * This Effect creates a starship nodes and edges
   */
  useEffect(() => {
    if (!starshipsData) {
      return
    }

    /**
     * Here we create a edge between each film and main node.
     */
    const shipNodes = starshipsData?.map((ship: IStarship, idx: number) => ({
      id: `${ship.id}`,
      data: { label: ship.name },
      position: {
        x: Math.random() + idx * 200,
        y: Math.random() + 400
      },
      style: { fontSize: '20px', fontWeight: '600', color: 'black' }
    })) as Node[]

    /**
     * Here we create a edge between each ship and film node.
     */
    const shipEdges = starshipsData
      ?.map((ship: IStarship) => {
        return ship.films.map((idx) => ({
          id: `${idx}-${ship.id}`,
          source: `${idx}`,
          target: `${ship.id}`,
          label: 'starship',
          type: 'straight'
        }))
      })
      .flat() as Edge[]

    /**
     * Getting previously created nodes and edges and adding new ones
     */
    setNodes((nodes) => [...nodes, ...shipNodes])
    setEdges((edges) => [...edges, ...shipEdges])
  }, [starshipsData])

  return {
    nodes,
    edges
  }
}

export default useHeroGraph
