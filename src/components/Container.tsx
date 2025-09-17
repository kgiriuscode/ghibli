import { type FC, type PropsWithChildren } from 'react'

export const Container: FC<PropsWithChildren> = ({ children }) => (
  <div className="ml-[172px] h-[100vh] bg-gray-50">{children}</div>
)
