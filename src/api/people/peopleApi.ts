import { skipToken, useQuery, type UseQueryResult } from '@tanstack/react-query'

import { swApi } from '@/api/api'

import type { IPerson, PaginatedResponse } from '@/shared/interfaces'

type PeopleData = PaginatedResponse<IPerson>
type PeopleError = unknown

type GetPeopleQueryResult = Pick<
  UseQueryResult<PeopleData, PeopleError>,
  'data' | 'isLoading' | 'isFetching' | 'isError' | 'error'
>

/**
 * Hook that represents a get query to fetch all people from the API
 * @returns {GetPeopleQueryResult} Returns {data, isLoading, isFetching, isError, error} fields from useQuery hook
 * @example
 * const { data, isLoading } = useGetPeopleQuery();
 */
export const useGetPeopleQuery = (): GetPeopleQueryResult => {
  const { data, isLoading, isFetching, isError, error } = useQuery({
    queryKey: ['people'],
    queryFn: ({ signal }) => swApi<PaginatedResponse<IPerson>>('/people', { signal })
  })

  return { data, isLoading, isFetching, isError, error }
}

type PersonData = IPerson
type PersonError = unknown

type GetSinglePersonResult = Pick<
  UseQueryResult<PersonData, PersonError>,
  'data' | 'isLoading' | 'isFetching' | 'isError' | 'error'
>

/**
 * Hook that represents a get query to fetch single person from the API
 * @param personId - ID of the person
 * @returns {GetPeopleQueryResult} Returns {data, isLoading, isFetching, isError, error} fields from useQuery hook
 * @example
 * const { data, isLoading } = useGetSinglePersonQuery("1");
 */
export const useGetSinglePersonQuery = (personId: string): GetSinglePersonResult => {
  const { data, isLoading, isFetching, isError, error } = useQuery({
    queryKey: ['people', [...personId].sort()],
    queryFn: personId ? ({ signal }) => swApi<IPerson>(`/people/${personId}`, { signal }) : skipToken,
    enabled: !!personId
  })

  return { data, isLoading, isFetching, isError, error }
}
