import { type FC } from 'react'
import type { Film } from '../../../types/types'

export const FilmCard:FC<Film> = ({title, description, release_date: releaseDate}) => {
  return (
    <div className='flex flex-col gap-4 p-3 pt-0 min-w-[400px]'>
        <div className='flex flex-col gap-3'> 
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{releaseDate}</p>
        </div>
        <button>
            Show people
        </button>
    </div>
  )
}
