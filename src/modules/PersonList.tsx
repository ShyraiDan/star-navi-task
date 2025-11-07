import { useGetPeople } from '@/api/people/peopleApi'
import PersonCard from '@/components/PersonCard'
import { LoadingContainer } from '@/ui/container'

export const PersonList = () => {
  const { data: people, isLoading } = useGetPeople()

  return (
    <>
      {isLoading ? (
        <LoadingContainer />
      ) : (
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {people?.results.map((person) => (
            <PersonCard person={person} key={person.id} />
          ))}
        </div>
      )}
    </>
  )
}
