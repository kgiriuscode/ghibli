import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { ReactElement } from 'react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import type { Person } from '../../../types/types'
import { fetchPeople } from '../helpers/fetchPeople'
import { FilmCard } from './FilmCard'

vi.mock('../helpers/fetchPeople')
const mockFetchPeople = vi.mocked(fetchPeople)

describe('FilmCard component', () => {
  let queryClient: QueryClient
  let user: ReturnType<typeof userEvent.setup>

  const MOCK_FILM = {
    title: 'Mock title',
    description: 'Mock description',
    release_date: '2002-10-15',
    people: ['https://mock-api/people/1', 'https://mock-api/people/2'],
  }

  const MOCK_PEOPLE: Person[] = [
    { name: 'Person 1', age: '33 years', gender: 'Female', eye_color: 'Brown' },
    { name: 'Person 2', age: '42 years', gender: 'Male', eye_color: 'Blue' },
  ]

  beforeEach(() => {
    queryClient = new QueryClient({
      defaultOptions: {
        queries: { retry: false },
        mutations: { retry: false },
      },
    })
    user = userEvent.setup()
    vi.clearAllMocks()
  })

  const renderWithProviders = (element: ReactElement) =>
    render(<QueryClientProvider client={queryClient}>{element}</QueryClientProvider>)

  it('Renders FilmCard component', () => {
    renderWithProviders(<FilmCard {...MOCK_FILM} />)

    expect(screen.getByText(MOCK_FILM.title)).toBeInTheDocument()
    expect(screen.getByText(MOCK_FILM.description)).toBeInTheDocument()
    expect(screen.getByText(`Release date: ${MOCK_FILM.release_date}`)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Show people' })).toBeInTheDocument()
  })

  it('Changes button text to "Loading..." once button is clicked', async () => {
    mockFetchPeople.mockImplementation(
      () => new Promise((resolve) => setTimeout(() => resolve(MOCK_PEOPLE), 100))
    )

    renderWithProviders(<FilmCard {...MOCK_FILM} />)

    const button = screen.getByRole('button', { name: 'Show people' })

    await user.click(button)

    expect(screen.getByText('Loading...')).toBeInTheDocument()
    expect(button).toBeDisabled()

    await waitFor(() => {
      expect(screen.getByText('Show people')).toBeInTheDocument()
    })
  })

  it('fetches and sets people data successfully', async () => {
    mockFetchPeople.mockResolvedValue(MOCK_PEOPLE)

    renderWithProviders(<FilmCard {...MOCK_FILM} />)

    const button = screen.getByRole('button', { name: 'Show people' })

    await user.click(button)

    await waitFor(() => {
      expect(screen.getByText('Show people')).toBeInTheDocument()
    })

    expect(mockFetchPeople).toHaveBeenCalledWith(MOCK_FILM.people)

    const finalData = queryClient.getQueryData(['film-people'])
    expect(finalData).toEqual({
      people: MOCK_PEOPLE,
      title: MOCK_FILM.title,
      placeholder: null,
    })
  })
})
