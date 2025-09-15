import { type FC, type PropsWithChildren } from 'react'

type ButtonProps = {
    onClickCallback: () => void
    isDisabled: boolean
}

export const Button:FC<PropsWithChildren<ButtonProps>> = ({
    onClickCallback, 
    isDisabled,
    children,
}) => {
    const buttonStyles = [
        'bg-blue-500',
        'text-white',
        'text-l',
        'pl-2',
        'pr-2',
        'pt-1',
        'pb-1',
        'rounded',
        'hover:bg-blue-600',
        `${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}`,
   ].join(' ')
    
    return (
    <button 
        onClick={onClickCallback}
        className={buttonStyles}
        disabled={isDisabled}
    >
        {children}
    </button>
)}
