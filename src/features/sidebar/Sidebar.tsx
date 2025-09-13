import { type FC } from 'react'
import { NavLink } from 'react-router-dom'
import { routes } from '../../routes'



export const Sidebar:FC = () => {
  return (
    <nav className=' flex flex-col gap-3 p-4 pt-10 border-r-gray-200 border-r-2'>
      {routes.map(({path, name}) => (
        <NavLink 
          key={name} 
          to={path} 
          className='hover:bg-gray-200 pt-1 pb-1 pl-2 pr-2 rounded'
        >
          {name}
        </NavLink>
      ))}
    </nav>
  )
}
