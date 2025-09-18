import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import type { FilmPeopleQuery } from '../../../types/types'
import { PeopleList } from './PeopleList'

describe('PeopleList', () => {
  let queryClient: QueryClient

  beforeEach(() => {
    queryClient = new QueryClient({
      defaultOptions: {
        queries: { retry: false },
      },
    })
  })

  const renderWithProviders = (component: React.ReactElement) => {
    return render(<QueryClientProvider client={queryClient}>{component}</QueryClientProvider>)
  }

  it('renders with title & a list of people', () => {
    const MOCK_DATA: FilmPeopleQuery = {
      title: 'Mock film title',
      people: [
        {
          name: 'Luke Skywalker',
          age: '19',
          gender: 'male',
          eye_color: 'blue',
        },
        {
          name: 'Princess Leia',
          age: '19',
          gender: 'female',
          eye_color: 'brown',
        },
      ],
    }

    queryClient.setQueryData(['film-people'], MOCK_DATA)
    renderWithProviders(<PeopleList />)

    expect(screen.getByText(MOCK_DATA.title!)).toBeInTheDocument()
    expect(screen.getByRole('table')).toBeInTheDocument()
    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument()
    expect(screen.getByText('Princess Leia')).toBeInTheDocument()
  })

  it('shows placeholder "Loading..." when no title and no people', () => {
    const mockData: FilmPeopleQuery = {
      placeholder: 'Loading...',
    }

    queryClient.setQueryData(['film-people'], mockData)
    renderWithProviders(<PeopleList />)

    expect(screen.queryByRole('table')).not.toBeInTheDocument()
    expect(screen.queryByRole('heading')).toHaveTextContent('Loading...')
  })

  it('renders empty state when no data at all', () => {
    renderWithProviders(<PeopleList />)

    expect(screen.queryByRole('heading')).not.toBeInTheDocument()
    expect(screen.queryByRole('table')).not.toBeInTheDocument()
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
  })
})
