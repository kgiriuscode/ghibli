import { useState, type ReactNode } from 'react'
import { FilmsContext, type SelectedFilm } from './FilmsContext'

export const FilmsProvider = ({ children }: { children: ReactNode }) => {
  const [selectedFilm, setSelectedFilm] = useState<SelectedFilm | null>(null)

  return (
    <FilmsContext.Provider value={{ selectedFilm, setSelectedFilm }}>
      {children}
    </FilmsContext.Provider>
  )
}
