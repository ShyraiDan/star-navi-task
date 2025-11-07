import { createFileRoute } from '@tanstack/react-router'

import HeroPage from '@/pages/HeroPage'

export const Route = createFileRoute('/')({
  component: HeroPage
})
