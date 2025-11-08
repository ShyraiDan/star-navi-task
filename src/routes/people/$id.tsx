import { createFileRoute } from '@tanstack/react-router'

import SinglePersonPage from '@/pages/SinglePersonPage'

export const Route = createFileRoute('/people/$id')({
  component: SinglePersonPage
})
