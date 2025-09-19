import { createContext } from 'react'

export type SelectedFilm = {
  title: string
  id: string
  peopleUrls: string[]
}

type FilmsContextType = {
  selectedFilm: SelectedFilm | null
  setSelectedFilm: (film: SelectedFilm | null) => void
}

export const FilmsContext = createContext<FilmsContextType | null>(null)
