import { useQuery } from '@tanstack/react-query'

import { swApi } from '@/api/api'

import type { IPerson } from '@/shared/interfaces'

interface GetPeopleResponse {
  count: number
  next: string | null
  previous: string | null
  results: IPerson[]
}

export const useGetPeople = () => {
  const { data, isLoading, isFetching, isError, error } = useQuery({
    queryKey: ['people'],
    queryFn: ({ signal }) => swApi<GetPeopleResponse>('/people', { signal })
  })

  return { data, isLoading, isFetching, isError, error }
}
