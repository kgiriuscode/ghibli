import { useQuery } from '@tanstack/react-query'
import { type FC } from 'react'
import type { Person } from '../../../types/types'

const HEADINGS = [
    'Name',
    'Age',
    'Gender',
    'Eye color'
]

export const PeopleList:FC = () => {
    const { data } = useQuery<{people: Person[], title: string}>({
        queryKey: ['film-people'],
        enabled: false, 
      })
  
    if (!data?.people) return null
    
    return (
        <>
            <h3 className=' text-center text-xl'>People in {data.title}:</h3>
            <table>
                <thead>
                    <tr>
                        {HEADINGS.map(heading => (
                            <td key={heading} className=' text-l font-bold'>{heading}</td>
                        ))}
                    </tr>
                </thead>
                <tbody className='text-sm'>
                {data.people.map(({name, age, gender, eye_color}) => (
                        <tr key={name}>
                            <td>{name}</td>
                            <td>{age}</td>
                            <td>{gender}</td>
                            <td>{eye_color}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
