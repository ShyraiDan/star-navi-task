import { PersonList } from '@/modules/PersonList'
import { Container } from '@/ui/container'
import { H1, P } from '@/ui/typography'

const PeoplePage = () => {
  return (
    <Container>
      <div className='mb-12'>
        <H1 className='capitalize text-center mb-4 text-grey-100'>Galactic database</H1>
        <P className='text-center text-grey-200'>Explore the heroes, villains, and legends of the galaxy</P>
      </div>
      <PersonList />
    </Container>
  )
}

export default PeoplePage
