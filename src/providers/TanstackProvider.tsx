import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { type ReactNode, useState } from 'react'

interface TanstackProviderProps {
  children: ReactNode
}

/**
 * A React Query provider that wraps the application with a QueryClient.
 * @param {TanstackProviderProps} props - The props for the TanstackProvider component.
 * @returns {JSX.Element} - The rendered QueryClientProvider component.
 */
const TanstackProvider = ({ children }: TanstackProviderProps) => {
  const [queryClient] = useState(() => new QueryClient())

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default TanstackProvider
