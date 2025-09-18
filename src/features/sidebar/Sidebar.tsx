import { useState, type FC } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { routes } from '../../routes'

export const Sidebar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const menuButtonStyles = [
    'text-2xl',
    'text-white',
    'bg-black',
    'opacity-50',
    'absolute',
    'top-3',
    'rounded-full',
    'w-10',
    'h-10',
    'z-50',
    'items-center',
    'justify-center',
    'md:hidden',
  ].join(' ')

  const sidebarStyles = [
    'flex',
    'flex-col',
    'gap-3',
    'p-4',
    'pt-20',
    'border-r-gray-200',
    'border-r-1',
    'fixed',
    'top-0',
    'left-0',
    'h-full',
    'bg-white',
    'transition-[width,opacity] ease-in-out duration-[400ms]',
    `${isMenuOpen ? 'w-[172px] opacity-100' : 'w-0 opacity-0'}`,
    'md:w-[172px]',
    'md:pt-10',
    'md:opacity-100',
  ].join(' ')

  return (
    <div>
      <button
        className={menuButtonStyles + ` left-3 ${isMenuOpen ? 'hidden' : 'flex'}`}
        onClick={() => setIsMenuOpen(true)}
      >
        ⋮
      </button>
      <nav className={sidebarStyles}>
        <button
          className={menuButtonStyles + ` right-3 ${isMenuOpen ? 'flex' : 'hidden'}`}
          onClick={() => setIsMenuOpen(false)}
        >
          X
        </button>
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
    </div>
  )
}
