import { type FC } from 'react'
import { NavLink } from 'react-router-dom'
import { routes } from '../../routes'



export const Sidebar:FC = () => {
  return (
    <nav className=' flex flex-col gap-2'>
      {routes.map(({path, name}) => (
        <NavLink key={name} to={path}>{name}</NavLink>
      ))}
    </nav>
  )
}
