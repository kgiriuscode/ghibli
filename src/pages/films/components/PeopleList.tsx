import { useQuery } from '@tanstack/react-query'
import { type FC } from 'react'
import type { Person } from '../../../types/types'

const HEADINGS = ['Name', 'Age', 'Gender', 'Eye color']

export const PeopleList: FC = () => {
  const { data } = useQuery<{ people: Person[]; title: string }>({
    queryKey: ['film-people'],
    enabled: false,
  })

  const headerText = data?.people ? `People in ${data.title}:` : data?.title
  const headerStyles = `text-center text-xl ${data?.people ? '' : 'text-gray-500 animate-pulse'}`

  return (
    <div className="flex flex-col gap-6">
      <h3 className={headerStyles}>{headerText}</h3>
      {data?.people && (
        <table className="border-1 border-gray-200 bg-white">
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
                <td className="p-2 border-1 border-gray-200 w-[25%]">{name}</td>
                <td className="p-2 border-1 border-gray-200 w-[25%]">{age}</td>
                <td className="p-2 border-1 border-gray-200 w-[25%]">{gender}</td>
                <td className="p-2 border-1 border-gray-200 w-[25%]">{eye_color}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
