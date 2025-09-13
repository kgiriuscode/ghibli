import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Container } from './components/Container.tsx'
import { Sidebar } from './features/sidebar/Sidebar.tsx'
import './index.css'
import { routes } from './routes.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Container>
        <Sidebar />
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Container>
    </BrowserRouter>
  </StrictMode>,
)
