import { useSearch } from '@tanstack/react-router'

import { useGetPeopleQuery } from '@/api/people/peopleApi'
import { Pagination } from '@/components/Pagination'
import PersonCard from '@/components/PersonCard'
import { LoadingContainer } from '@/ui/container'
import { H4 } from '@/ui/typography'

const PAGE_SIZE = 10

export const PersonList = () => {
  const { page } = useSearch({ from: '/people/' })

  const { data, isLoading, isError } = useGetPeopleQuery(page)

  const totalPages = data && PAGE_SIZE > 0 ? Math.max(1, Math.ceil(data.count / PAGE_SIZE)) : 1

  if (isError) return <H4>An error has occurred. Please try again.</H4>
  if (isLoading) return <LoadingContainer />

  const results = data?.results ?? []
  if (results.length === 0) return <H4>No results found.</H4>

  return (
    <section aria-label='People list'>
      <ul className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {results.map((person) => (
          <li key={person.id}>
            <PersonCard person={person} />
          </li>
        ))}
      </ul>

      <div className='flex items-center justify-center mt-4'>
        <Pagination currentPage={page} totalPages={totalPages} />
      </div>
    </section>
  )
}
