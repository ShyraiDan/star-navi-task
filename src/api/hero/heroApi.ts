import { skipToken, useQuery, type UseQueryResult } from '@tanstack/react-query'

import { swApi } from '@/api/api'

import type { IHero, PaginatedResponse } from '@/shared/interfaces'

type HeroesData = PaginatedResponse<IHero>
type HeroesError = unknown

type GetHeroesQueryResult = Pick<
  UseQueryResult<HeroesData, HeroesError>,
  'data' | 'isLoading' | 'isFetching' | 'isError' | 'error'
>

/**
 * Hook that represents a get query to fetch all people from the API
 * @param page - Number of page
 * @returns {GetHeroesQueryResult} Returns {data, isLoading, isFetching, isError, error} fields from useQuery hook
 * @example
 * const { data, isLoading } = useGetHeroesQuery();
 */
export const useGetHeroesQuery = (page: number): GetHeroesQueryResult => {
  const { data, isLoading, isFetching, isError, error } = useQuery({
    queryKey: ['hero-list', page],
    queryFn: ({ signal }) => swApi<PaginatedResponse<IHero>>(`/people/?page=${page}`, { signal })
  })

  return { data, isLoading, isFetching, isError, error }
}

type HeroData = IHero
type HeroError = unknown

type GetSingleHeroResult = Pick<
  UseQueryResult<HeroData, HeroError>,
  'data' | 'isLoading' | 'isFetching' | 'isError' | 'error'
>

/**
 * Hook that represents a get query to fetch single hero from the API
 * @param heroId - ID of the hero
 * @returns {GetSingleHeroResult} Returns {data, isLoading, isFetching, isError, error} fields from useQuery hook
 * @example
 * const { data, isLoading } = useGetSingleHeroQuery("1");
 */
export const useGetSingleHeroQuery = (heroId: string): GetSingleHeroResult => {
  const { data, isLoading, isFetching, isError, error } = useQuery({
    queryKey: ['hero', 'detail', heroId],
    queryFn: heroId ? ({ signal }) => swApi<IHero>(`/people/${heroId}`, { signal }) : skipToken,
    enabled: !!heroId
  })

  return { data, isLoading, isFetching, isError, error }
}
