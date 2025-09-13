import { type FC, type PropsWithChildren } from 'react'

type ButtonProps = {
    onClickCallback: () => void
}

export const Button:FC<PropsWithChildren<ButtonProps>> = ({
    onClickCallback, 
    children
}) => (
    <button 
        onClick={onClickCallback}
        className=' bg-blue-500 text-white text-l pl-2 pr-2 pt-1 pb-1 rounded cursor-pointer'
    >
        {children}
    </button>
)
