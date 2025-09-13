import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Container } from './components/Container.tsx'
import { Sidebar } from './features/sidebar/Sidebar.tsx'
import './index.css'
import { routes } from './routes.tsx'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Container>
        <QueryClientProvider client={queryClient}>
          <Sidebar />
          <Routes>
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </QueryClientProvider>
      </Container>
    </BrowserRouter>
  </StrictMode>,
)
