import { useGetPeopleQuery } from '@/api/people/peopleApi'
import PersonCard from '@/components/PersonCard'
import { LoadingContainer } from '@/ui/container'
import { H4 } from '@/ui/typography'

export const PersonList = () => {
  const { data, isLoading, isError } = useGetPeopleQuery()

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
    </section>
  )
}
