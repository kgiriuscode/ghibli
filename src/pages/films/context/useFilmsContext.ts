import { useContext } from 'react'
import { FilmsContext } from './FilmsContext'

export const useFilmsContext = () => {
  const context = useContext(FilmsContext)
  if (!context) {
    throw new Error('useFilmsContext must be used within a FilmsProvider')
  }
  return context
}
