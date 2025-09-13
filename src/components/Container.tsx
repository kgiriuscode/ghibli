import { type FC, type PropsWithChildren } from 'react'

export const Container:FC<PropsWithChildren> = ({children}) => (
    <div className='grid grid-cols-[200px_auto] pt-4 pb-4'>{children}</div>
)
