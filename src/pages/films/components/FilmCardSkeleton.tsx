import { type FC } from 'react'

const placeholderArray = [1, 2, 3, 4]

const skeletonStyles = [
  'h-[430px]',
  'rounded',
  'flex',
  'items-center',
  'justify-center',
  'bg-white',
  'border-1',
  'border-gray-200',
  'animate-pulse',
  'shrink-0',
  'basis-[320px]',
  'md:basis-[400px]',
].join(' ')

export const FilmCardSkeleton: FC = () => (
  <>
    {placeholderArray.map(() => (
      <div className={skeletonStyles}>
        <p className="text-l text-gray-500">...Loading</p>
      </div>
    ))}
  </>
)
