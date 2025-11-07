import { createFileRoute } from '@tanstack/react-router'

import SinglePersonPage from '@/pages/SinglePersonPage'

export const Route = createFileRoute('/people/$postId')({
  component: SinglePersonPage
})
