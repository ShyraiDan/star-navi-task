import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import TanstackProvider from '@/providers/TanstackProvider'

import App from './App.tsx'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TanstackProvider>
      <App />
    </TanstackProvider>
  </StrictMode>
)
