import type { FC } from 'react'
import { description } from './data'

export const About: FC = () => (
  <div className="flex flex-col p-10 w-[100%] h-full gap-6">
    <h2 className="text-2xl">About this project</h2>
    <p>{description}</p>
  </div>
)
