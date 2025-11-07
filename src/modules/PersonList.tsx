import PersonCard from '@/components/PersonCard'
import { people } from '@/mocks/mockedPerson'

export const PersonList = () => {
  return (
    <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
      {people.map((person) => (
        <PersonCard person={person} key={person.id} />
      ))}
    </div>
  )
}
