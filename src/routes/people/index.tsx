import { createFileRoute } from '@tanstack/react-router'

import PeoplePage from '@/pages/PeoplePage'

interface PageParams {
  page: number
}

export const Route = createFileRoute('/people/')({
  validateSearch: (search: Record<string, unknown>): PageParams => {
    return {
      page: search.page as number
    }
  },
  component: PeoplePage
})
