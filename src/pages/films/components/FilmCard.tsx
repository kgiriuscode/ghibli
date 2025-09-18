import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useState, type FC } from 'react'
import { toast } from 'react-toastify'
import { Button } from '../../../components/Button'
import type { Film, FilmPeopleQuery } from '../../../types/types'
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
    queryClient.setQueryData<FilmPeopleQuery>(['film-people'], {
      placeholder: 'Loading...',
    })

    const res = await refetch()
    setIsLoading(false)

    if (!res.isSuccess) {
      toast('Something went wrong. Please try again or contact support.', { type: 'error' })
      queryClient.setQueryData<FilmPeopleQuery>(['film-people'], {
        people: null,
        title: null,
        placeholder: null,
      })
      return
    }

    if (res.data) {
      const people = res.data.flatMap((fp) => fp)
      queryClient.setQueryData<FilmPeopleQuery>(['film-people'], {
        people,
        title,
        placeholder: null,
      })
    }
  }

  const cardStyles = [
    'flex',
    'flex-col',
    'grow-0',
    'shrink-0',
    'basis-[320px]',
    'md:basis-[400px]',
    'items-start',
    'gap-4',
    'p-3',
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
