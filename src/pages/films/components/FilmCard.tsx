import { type FC } from 'react'
import type { Film } from '../../../types/types'

export const FilmCard:FC<Film> = ({title, description, release_date: releaseDate}) => {
  return (
    <div className='flex flex-col items-start gap-4 p-3 min-w-[400px] border-2 border-gray-200 shadow'>
        <div className='flex flex-col gap-3'> 
            <h2 className='text-2xl'>{title}</h2>
            <p className=' text-sm'>{description}</p>
            <p className=' text-sm text-gray-700'>{`Release date: ${releaseDate}`}</p>
        </div>
        <button>
            Show people
        </button>
    </div>
  )
}
