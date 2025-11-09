import { useParams } from '@tanstack/react-router'

import { useGetSingleHeroQuery } from '@/api/hero/heroApi'
import HeroInfo from '@/components/HeroInfo/HeroInfo'
import HeroGraph from '@/modules/HeroGraph'
import { Container } from '@/ui/Container/Container'
import { LoadingContainer } from '@/ui/LoadingContainer/LoadingContainer'
import { H4 } from '@/ui/Typography/Typography'

/**
 * Page that displays a single hero's information and graph of related films and starships.
 * @returns {JSX.Element} - The rendered SingleHero page.
 */
const SingleHeroPage = () => {
  const { id } = useParams({ from: '/hero/$id' })

  const { data: heroData, isLoading: isLoading, isError: isError } = useGetSingleHeroQuery(id)

  if (isError)
    return (
      <Container>
        <H4>An error has occurred. Please try again.</H4>
      </Container>
    )
  if (isLoading) return <LoadingContainer className='p-8 min-h-[calc(100vh-60px-64px)] xl:max-w-[1200px] xl:mx-auto' />

  return (
    <Container>
      <div className='grid grid-cols-1'>{heroData && <HeroInfo hero={heroData} />}</div>
      {heroData && <HeroGraph hero={heroData} />}
    </Container>
  )
}

export default SingleHeroPage
