import { useQuery } from '@tanstack/react-query'
import { type FC } from 'react'
import { toast } from 'react-toastify'
import { Button } from '../../../components/Button'
import type { Film } from '../../../types/types'
import { useFilmsContext } from '../context/useFilmsContext'
import { fetchPeople } from '../helpers/fetchPeople'

export const FilmCard: FC<Film> = ({
  id: filmId,
  title,
  description,
  release_date: releaseDate,
  people: peopleUrls,
}) => {
  const { setSelectedFilm } = useFilmsContext()
  const { refetch, isFetching } = useQuery({
    queryKey: [`people-${filmId}`, peopleUrls],
    queryFn: () => fetchPeople(peopleUrls),
    enabled: false,
  })

  const handleClick = async () => {
    setSelectedFilm({ title, id: filmId, peopleUrls })

    const res = await refetch()

    if (!res.isSuccess) {
      toast('Something went wrong. Please try again or contact support.', { type: 'error' })
      return
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
      <Button onClickCallback={handleClick} isDisabled={isFetching}>
        {isFetching ? 'Loading...' : 'Show people'}
      </Button>
    </div>
  )
}
