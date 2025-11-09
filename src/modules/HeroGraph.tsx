import { Background, Controls, ReactFlow } from '@xyflow/react'

import { useGetMultipleFilmsByIdsQuery } from '@/api/films/filmsApi'
import { useGetMultipleStarshipsByIdsQuery } from '@/api/starships/starshipsApi'
import useheroGraph from '@/hooks/useHeroGraph'
import { LoadingContainer } from '@/ui/LoadingContainer/LoadingContainer'
import { H4 } from '@/ui/Typography/Typography'

import type { IHero } from '@/shared/interfaces'

import '@xyflow/react/dist/style.css'

interface HeroGraphProps {
  hero: IHero
}

/**
 * Here used a React Flow library and build a graph with nodes and edges according to the DOC:
 * https://reactflow.dev/learn/concepts/building-a-flow
 */

/**
 * A component that renders a graph of a hero's related films and starships.
 * The graph is rendered using the React Flow library and consists of nodes and edges.
 * The nodes represent the hero, films, and starships, and the edges represent the relationships between them.
 * The graph is updated dynamically based on the data fetched from the API.
 *
 * @param hero - The hero object to display in the graph
 * @returns {JSX.Element} - The rendered HeroGraph component
 */
const heroGraph = ({ hero }: HeroGraphProps) => {
  /**
   * Fetch starships data from the API
   */
  const {
    data: starshipsData,
    isLoading: isStarshipLoading,
    isError: isStarshipError
  } = useGetMultipleStarshipsByIdsQuery(hero?.starships ? hero?.starships : [])

  /**
   * Fetch films data from the API
   */
  const {
    data: filmsData,
    isLoading: isFilmsLoading,
    isError: isFilmsError
  } = useGetMultipleFilmsByIdsQuery(hero?.films ? hero?.films : [])

  const isError = isStarshipError || isFilmsError
  const isLoading = isStarshipLoading || isFilmsLoading

  const { nodes, edges } = useheroGraph({
    heroData: hero,
    filmsData: filmsData?.results,
    starshipsData: starshipsData?.results
  })

  if (isError) return <H4>An error has occurred. Please try again.</H4>
  if (isLoading) return <LoadingContainer />

  return (
    <div className='h-[1000px] mt-5'>
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <Background />
        <Controls style={{ color: 'black' }} />
      </ReactFlow>
    </div>
  )
}

export default heroGraph
