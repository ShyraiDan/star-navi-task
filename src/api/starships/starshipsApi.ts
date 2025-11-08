import { useQuery, type UseQueryResult } from '@tanstack/react-query'

import { swApi } from '@/api/api'
import { transformIdsToCsv } from '@/utils/transformIdsToCsv/transformIdsToCsv'

import type { IStarship, PaginatedResponse } from '@/shared/interfaces'

type FilmData = PaginatedResponse<IStarship>
type FilmError = unknown

type GetMultipleStarshipsByIdsResult = Pick<
  UseQueryResult<FilmData, FilmError>,
  'data' | 'isLoading' | 'isFetching' | 'isError' | 'error'
>

/**
 * Hook that represents a get query to fetch multiple starships from the API
 * @param starshipsIds - an array of IDs of the starships
 * @returns {GetMultipleStarshipsByIdsResult} Returns {data, isLoading, isFetching, isError, error} fields from useQuery hook
 * @example
 * const { data, isLoading } = useGetMultipleStarshipsByIdsQuery([1,3,6]);
 */
export const useGetMultipleStarshipsByIdsQuery = (starshipsIds: number[]): GetMultipleStarshipsByIdsResult => {
  const { data, isLoading, isFetching, isError, error } = useQuery({
    queryKey: ['starships', starshipsIds],
    queryFn: ({ signal }) =>
      swApi<PaginatedResponse<IStarship>>(`/starships/?id__in=${transformIdsToCsv(starshipsIds)}`, { signal })
  })

  return { data, isLoading, isFetching, isError, error }
}
