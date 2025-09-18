import { useQuery } from '@tanstack/react-query'
import { type FC } from 'react'
import type { Film } from '../../types/types'
import { FilmCard } from './components/FilmCard'
import { FilmCardSkeleton } from './components/FilmCardSkeleton'
import { PeopleList } from './components/PeopleList'
import { fetchFilms } from './helpers/fetchFilms'

export const Films: FC = () => {
  const { data: films } = useQuery<Film[]>({ queryKey: ['films'], queryFn: fetchFilms })

  return (
    <div className="flex flex-col gap-8 p-6 pt-10 md:p-10 w-[100%] overflow-hidden min-h-fit">
      <div className="flex overflow-scroll gap-3">
        {films?.length ? (
          films?.map((film) => <FilmCard key={film.title} {...film} />)
        ) : (
          <FilmCardSkeleton />
        )}
      </div>
      <PeopleList />
    </div>
  )
}
