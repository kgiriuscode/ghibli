import type { JSX } from 'react'
import { About } from './pages/about/About'
import { Films } from './pages/films/Films'

export type Route = {
  path: string
  name: string
  element: JSX.Element
}

export const routes: Route[] = [
  { path: '/about', name: 'About', element: <About /> },
  { path: '/films', name: 'Films', element: <Films /> },
]
