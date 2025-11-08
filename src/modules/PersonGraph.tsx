import {
  Background,
  Controls,
  ReactFlow,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  type Connection,
  type Edge,
  type EdgeChange,
  type Node,
  type NodeChange
} from '@xyflow/react'
import { useCallback, useEffect, useState } from 'react'

import { useGetMultipleFilmsByIdsQuery } from '@/api/films/filmsApi'
import { useGetMultipleStarshipsByIdsQuery } from '@/api/starships/starshipsApi'
import { LoadingContainer } from '@/ui/container'
import { H4 } from '@/ui/typography'

import type { IFilm, IPerson, IStarship } from '@/shared/interfaces'

import '@xyflow/react/dist/style.css'

interface PersonGraphProps {
  person: IPerson
}

const initialNodes: Node[] = []
const initialEdges: Edge[] = []

const PersonGraph = ({ person }: PersonGraphProps) => {
  const {
    data: starshipsData,
    isLoading: isStarshipLoading,
    isError: isStarshipError
  } = useGetMultipleStarshipsByIdsQuery(person?.starships ? person?.starships : [])

  const {
    data: filmsData,
    isLoading: isFilmsLoading,
    isError: isFilmsError
  } = useGetMultipleFilmsByIdsQuery(person?.films ? person?.films : [])

  const [nodes, setNodes] = useState(initialNodes)
  const [edges, setEdges] = useState(initialEdges)

  const onNodesChange = useCallback(
    (changes: NodeChange<Node>[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  )
  const onEdgesChange = useCallback(
    (changes: EdgeChange<Edge>[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  )
  const onConnect = useCallback((params: Connection) => setEdges((eds) => addEdge(params, eds)), [])

  const isError = isStarshipError || isFilmsError
  const isLoading = isStarshipLoading || isFilmsLoading

  useEffect(() => {
    if (!person) {
      return
    }

    setNodes([
      {
        id: `${person?.id}`,
        data: { label: person?.name },
        position: { x: (window.screen.width - 150) / 2, y: 0 },
        style: { fontSize: '20px', fontWeight: '600', color: 'black' }
      }
    ])
  }, [person])

  useEffect(() => {
    if (!filmsData) {
      return
    }

    const films = filmsData?.results

    const filmNodes = films?.map((film: { id: number; title: string }, idx: number) => ({
      id: `${film.id}`,
      data: { label: film.title },
      position: {
        x: Math.random() + idx * 200,
        y: Math.random() + 200
      },
      style: { fontSize: '20px', fontWeight: '600', color: 'black' }
    })) as Node[]

    const filmEdges = films?.map((film: IFilm) => ({
      id: `${person.id}-${film.id}`,
      source: person.id.toString(),
      target: `${film.id}`,
      label: 'film',
      type: 'straight'
    })) as Edge[]

    setNodes((nodes) => [...nodes, ...filmNodes])
    setEdges((edges) => [...edges, ...filmEdges])
  }, [filmsData, person.id])

  useEffect(() => {
    if (!starshipsData) {
      return
    }

    const starships = starshipsData?.results

    const shipNodes = starships?.map((ship: IStarship, idx: number) => ({
      id: `${ship.id}`,
      data: { label: ship.name },
      position: {
        x: Math.random() + idx * 200,
        y: Math.random() + 400
      },
      style: { fontSize: '20px', fontWeight: '600', color: 'black' }
    })) as Node[]

    const shipEdges = starships
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

    setNodes((nodes) => [...nodes, ...shipNodes])
    setEdges((edges) => [...edges, ...shipEdges])
  }, [starshipsData])

  if (isError) return <H4>An error has occurred. Please try again.</H4>
  if (isLoading) return <LoadingContainer />

  return (
    <div className='h-[1000px] mt-5'>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView>
        <Background />
        <Controls style={{ color: 'black' }} />
      </ReactFlow>
    </div>
  )
}

export default PersonGraph
