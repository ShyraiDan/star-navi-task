import { useSearch } from '@tanstack/react-router'

import { useGetHeroesQuery } from '@/api/hero/heroApi'
import HeroCard from '@/components/HeroCard/HeroCard'
import { Pagination } from '@/components/Pagination/Pagination'
import { LoadingContainer } from '@/ui/LoadingContainer/LoadingContainer'
import { H4 } from '@/ui/Typography/Typography'

/**
 * The number of items to display per page.
 */
const PAGE_SIZE = 10

/**
 * Component that displays a list of heroes.
 *
 * It fetches heroes from the API, paginating the results.
 * The number of items to display per page is defined by the PAGE_SIZE constant.
 * It displays a pagination component with the number of pages equal to the total number of results divided by the page size.
 */
export const HeroList = () => {
  const { page } = useSearch({ from: '/hero/' })

  const { data, isLoading, isError } = useGetHeroesQuery(page)

  const totalPages = data && PAGE_SIZE > 0 ? Math.max(1, Math.ceil(data.count / PAGE_SIZE)) : 1

  if (isError) return <H4>An error has occurred. Please try again.</H4>
  if (isLoading) return <LoadingContainer />

  const results = data?.results ?? []
  if (results.length === 0) return <H4>No results found.</H4>

  return (
    <section aria-label='Heroes list'>
      <ul className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {results.map((hero) => (
          <li key={hero.id}>
            <HeroCard hero={hero} />
          </li>
        ))}
      </ul>

      <div className='flex items-center justify-center mt-4'>
        <Pagination currentPage={page} totalPages={totalPages} />
      </div>
    </section>
  )
}
