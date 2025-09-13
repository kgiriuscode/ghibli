import { useQuery } from '@tanstack/react-query'
import { type FC } from 'react'
import type { Film } from '../../types/types'
import { FilmCard } from './components/FilmCard'
import { fetchFilms } from './helpers/fetchFilms'

export const Films:FC = () => {
  const {data, error, isLoading} = useQuery<Film[]>({queryKey: ['films'], queryFn: fetchFilms})
  
  return (
   <div className='p-10 w-[100%] overflow-hidden'>
     <div className='flex overflow-scroll gap-3'>
      {data?.map(film => (
        <FilmCard key={film.title} {...film} />
      ))}
    </div>
   </div>
  )
}
