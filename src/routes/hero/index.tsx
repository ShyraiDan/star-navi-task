import { createFileRoute } from '@tanstack/react-router'

import PeoplePage from '@/pages/HeroPage'

interface PageParams {
  page: number
}

export const Route = createFileRoute('/hero/')({
  validateSearch: (search: Record<string, unknown>): PageParams => {
    return {
      page: search.page as number
    }
  },
  component: PeoplePage
})
