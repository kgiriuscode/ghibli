import { type FC } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { routes } from '../../routes'

export const Sidebar: FC = () => {
  const location = useLocation()

  return (
    <nav className=" flex flex-col gap-3 p-4 pt-10 border-r-gray-200 border-r-2">
      {routes.map(({ path, name }) => {
        const isCurrentPage = path === location.pathname
        const navlinkStyles = [
          'hover:bg-gray-200',
          'pt-1',
          'pb-1',
          'pl-2',
          'pr-2',
          'rounded',
          'text-l',
          `${isCurrentPage ? 'bg-gray-100' : ''}`,
        ].join(' ')

        return (
          <NavLink key={name} to={path} className={navlinkStyles}>
            {name}
          </NavLink>
        )
      })}
    </nav>
  )
}
