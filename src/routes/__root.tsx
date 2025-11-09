import { Outlet, createRootRoute } from '@tanstack/react-router'

import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
})
