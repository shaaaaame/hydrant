import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import { Provider } from './components/ui/provider'
import Home from './pages/Home'
import Assistance from './pages/Assistance'
import Need from './pages/Need'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { APIProvider } from '@vis.gl/react-google-maps'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/assistance" element={<Assistance />} />
              <Route path="/need" element={<Need />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </APIProvider>
    </Provider>
  </StrictMode>
)
