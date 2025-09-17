import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useState, type FC } from 'react'
import { Button } from '../../../components/Button'
import type { Film } from '../../../types/types'
import { fetchPeople } from '../helpers/fetchPeople'

export const FilmCard: FC<Film> = ({
  title,
  description,
  release_date: releaseDate,
  people: peopleUrls,
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const queryClient = useQueryClient()

  const { refetch } = useQuery({
    queryKey: ['people', peopleUrls],
    queryFn: () => fetchPeople(peopleUrls),
    enabled: false,
  })

  const handleClick = async () => {
    setIsLoading(true)
    const res = await refetch()

    if (res.data) {
      const people = res.data.flatMap((fp) => fp)
      queryClient.setQueryData(['film-people'], {
        people,
        title,
      })
    }

    setIsLoading(false)
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
    'rounded',
    'bg-white',
  ].join(' ')

  return (
    <div className={cardStyles}>
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl">{title}</h2>
        <p className=" text-sm">{description}</p>
        <p className=" text-sm text-gray-700">{`Release date: ${releaseDate}`}</p>
      </div>
      <Button onClickCallback={handleClick} isDisabled={isLoading}>
        {isLoading ? 'Loading...' : 'Show people'}
      </Button>
    </div>
  )
}
