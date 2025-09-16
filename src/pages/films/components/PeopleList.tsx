import { useQuery } from '@tanstack/react-query'
import { type FC } from 'react'
import type { Person } from '../../../types/types'

const HEADINGS = ['Name', 'Age', 'Gender', 'Eye color']

export const PeopleList: FC = () => {
  const { data } = useQuery<{ people: Person[]; title: string }>({
    queryKey: ['film-people'],
    enabled: false,
  })

  if (!data?.people) return null

  return (
    <div className="flex flex-col gap-6">
      <h3 className=" text-center text-xl">People in {data.title}:</h3>
      <table className="border-2 border-gray-200">
        <thead>
          <tr>
            {HEADINGS.map((heading) => (
              <th key={heading} className=" text-l font-bold p-2 border-2 border-gray-200">
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-sm">
          {data.people.map(({ name, age, gender, eye_color }) => (
            <tr key={name}>
              <td className="p-2 border-2 border-gray-200 w-[25%]">{name}</td>
              <td className="p-2 border-2 border-gray-200 w-[25%]">{age}</td>
              <td className="p-2 border-2 border-gray-200 w-[25%]">{gender}</td>
              <td className="p-2 border-2 border-gray-200 w-[25%]">{eye_color}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
