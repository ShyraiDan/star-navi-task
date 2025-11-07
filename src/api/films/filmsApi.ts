import { useQuery, type UseQueryResult } from '@tanstack/react-query'

import { swApi } from '@/api/api'
import { transformIdsToCsv } from '@/utils/transformIdsToCsv'

import type { IFilm, PaginatedResponse } from '@/shared/interfaces'

type FilmData = PaginatedResponse<IFilm>
type FilmError = unknown

type GetMultipleFilmsByIdsResult = Pick<
  UseQueryResult<FilmData, FilmError>,
  'data' | 'isLoading' | 'isFetching' | 'isError' | 'error'
>

/**
 * Hook that represents a get query to fetch multiple films from the API
 * @param filmIds - an array of IDs of the films
 * @returns {GetMultipleFilmsByIdsResult} Returns {data, isLoading, isFetching, isError, error} fields from useQuery hook
 * @example
 * const { data, isLoading } = useGetMultipleFilmsByIdsQuery([1,3,6]);
 */
export const useGetMultipleFilmsByIdsQuery = (filmIds: number[]): GetMultipleFilmsByIdsResult => {
  const { data, isLoading, isFetching, isError, error } = useQuery({
    queryKey: ['films', filmIds],
    queryFn: ({ signal }) => swApi<PaginatedResponse<IFilm>>(`/films/?id__in=${transformIdsToCsv(filmIds)}`, { signal })
  })

  return { data, isLoading, isFetching, isError, error }
}
