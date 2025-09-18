import { useQuery } from '@tanstack/react-query'
import { type FC } from 'react'
import type { FilmPeopleQuery } from '../../../types/types'

const HEADINGS = ['Name', 'Age', 'Gender', 'Eye color']
const tdStyles = 'p-2 border-1 border-gray-200 w-[25%]'

export const PeopleList: FC = () => {
  const { data } = useQuery<FilmPeopleQuery>({
    queryKey: ['film-people'],
    enabled: false,
  })

  return (
    <div className="flex flex-col gap-6 overflow-x-hidden">
      {data?.title && <h3 className="text-center text-xl">{data.title}</h3>}
      {data?.placeholder && (
        <h3 className="text-center text-xl text-gray-500 animate-pulse">{data.placeholder}</h3>
      )}
      {data?.people && (
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
            {data?.people.map(({ name, age, gender, eye_color }) => (
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
