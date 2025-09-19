import { useQuery } from '@tanstack/react-query'
import { type FC } from 'react'
import type { Person } from '../../../types/types'
import { useFilmsContext } from '../context/useFilmsContext'
import { fetchPeople } from '../helpers/fetchPeople'

const HEADINGS = ['Name', 'Age', 'Gender', 'Eye color']
const tdStyles = 'p-2 border-1 border-gray-200 w-[25%]'

export const PeopleList: FC = () => {
  const { selectedFilm } = useFilmsContext()

  const { data, isFetching } = useQuery<Person[]>({
    queryKey: [`people-${selectedFilm?.id ?? 'none'}`],
    queryFn: () => fetchPeople(selectedFilm?.peopleUrls ?? []),
    enabled: Boolean(selectedFilm),
  })

  return (
    <div className="flex flex-col gap-6 overflow-x-hidden">
      {!isFetching && <h3 className="text-center text-xl">{selectedFilm?.title}</h3>}
      {isFetching && (
        <h3 className="text-center text-xl text-gray-500 animate-pulse">Loading...</h3>
      )}
      {data && (
        <table className="border-1 border-gray-200 bg-white break-all">
          <thead>
            <tr>
              {HEADINGS.map((heading) => (
                <th key={heading} className=" text-l font-bold p-2 border-1 border-gray-200">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-sm">
            {data.map(({ name, age, gender, eye_color }) => (
              <tr key={name}>
                <td className={tdStyles}>{name}</td>
                <td className={tdStyles}>{age}</td>
                <td className={tdStyles}>{gender}</td>
                <td className={tdStyles}>{eye_color}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
