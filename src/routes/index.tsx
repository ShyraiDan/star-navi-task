import { createFileRoute } from '@tanstack/react-router'

import HeroPage from '@/pages/MainPage'

export const Route = createFileRoute('/')({
  component: HeroPage
})
