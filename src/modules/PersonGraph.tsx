import { Background, Controls, ReactFlow } from '@xyflow/react'

import { useGetMultipleFilmsByIdsQuery } from '@/api/films/filmsApi'
import { useGetMultipleStarshipsByIdsQuery } from '@/api/starships/starshipsApi'
import usePersonGraph from '@/hooks/usePersonGraph'
import { LoadingContainer } from '@/ui/container'
import { H4 } from '@/ui/typography'

import type { IPerson } from '@/shared/interfaces'

import '@xyflow/react/dist/style.css'

interface PersonGraphProps {
  person: IPerson
}

/**
 * Here used a React Flow library and build a graph with nodes and edges according to the DOC:
 * https://reactflow.dev/learn/concepts/building-a-flow
 */

/**
 * A component that renders a graph of a person's related films and starships.
 * The graph is rendered using the React Flow library and consists of nodes and edges.
 * The nodes represent the person, films, and starships, and the edges represent the relationships between them.
 * The graph is updated dynamically based on the data fetched from the API.
 *
 * @param person - The person object to display in the graph
 * @returns {JSX.Element} - The rendered PersonGraph component
 */
const PersonGraph = ({ person }: PersonGraphProps) => {
  /**
   * Fetch starships data from the API
   */
  const {
    data: starshipsData,
    isLoading: isStarshipLoading,
    isError: isStarshipError
  } = useGetMultipleStarshipsByIdsQuery(person?.starships ? person?.starships : [])

  /**
   * Fetch films data from the API
   */
  const {
    data: filmsData,
    isLoading: isFilmsLoading,
    isError: isFilmsError
  } = useGetMultipleFilmsByIdsQuery(person?.films ? person?.films : [])

  const isError = isStarshipError || isFilmsError
  const isLoading = isStarshipLoading || isFilmsLoading

  const { nodes, edges } = usePersonGraph({
    personData: person,
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

export default PersonGraph
