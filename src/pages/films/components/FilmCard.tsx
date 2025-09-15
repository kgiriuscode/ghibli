import { useQuery, useQueryClient } from '@tanstack/react-query'
import { type FC } from 'react'
import { Button } from '../../../components/Button'
import type { Film } from '../../../types/types'
import { fetchPeople } from '../helpers/fetchPeople'

export const FilmCard:FC<Film> = ({
    title, 
    description, 
    release_date: releaseDate, 
    people: peopleUrls
}) => {
const queryClient = useQueryClient()

const {refetch, isFetching} = useQuery({
    queryKey: ['people', peopleUrls], 
    queryFn: () => fetchPeople(peopleUrls),
    enabled: false
})

const handleClick = async () => {
    const res = await refetch()
    if (res.data) {
        const people = res.data.flatMap(fp => fp)
        queryClient.setQueryData(['film-people'], {
            people,
            title
        })
    }
}

const cardStyles = [
    'flex', 
    'flex-col', 
    'items-start', 
    'gap-4', 
    'p-3', 
    'min-w-[400px]', 
    'border-1', 
    'border-gray-200', 
    'shadow', 
    'rounded'
].join(' ')
  
    return (
    <div className={cardStyles}>
        <div className='flex flex-col gap-3'> 
            <h2 className='text-2xl'>{title}</h2>
            <p className=' text-sm'>{description}</p>
            <p className=' text-sm text-gray-700'>{`Release date: ${releaseDate}`}</p>
        </div>
        <Button onClickCallback={handleClick} isDisabled={isFetching}>
            {isFetching ? 'Loading...' : 'Show people'}
        </Button>
    </div>
  )
}
