import { useParams } from '@tanstack/react-router'

import { useGetSinglePersonQuery } from '@/api/people/peopleApi'
import PersonInfo from '@/components/PersonInfo'
import PersonGraph from '@/modules/PersonGraph'
import { Container, LoadingContainer } from '@/ui/container'
import { H4 } from '@/ui/typography'

/**
 * Page that displays a single person's information and graph of related films and starships.
 * @returns {JSX.Element} - The rendered SinglePerson page.
 */
const SinglePersonPage = () => {
  const { id } = useParams({ from: '/people/$id' })

  const { data: personData, isLoading: isLoading, isError: isError } = useGetSinglePersonQuery(id)

  if (isError)
    return (
      <Container>
        <H4>An error has occurred. Please try again.</H4>
      </Container>
    )
  if (isLoading) return <LoadingContainer />

  return (
    <Container>
      <div className='grid grid-cols-1'>{personData && <PersonInfo person={personData} />}</div>
      {personData && <PersonGraph person={personData} />}
    </Container>
  )
}

export default SinglePersonPage
