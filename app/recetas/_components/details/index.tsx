import clsx from 'clsx/lite'
import Image from 'next/image'
import cookIcon from './cook.svg'
import prepIcon from './prep.svg'
import servingsIcon from './servings.svg'

interface Props {
  className?: string
  servings: number
  prep: number
  cook: number
}

export default function Details({ className, servings, prep, cook }: Props) {
  return (
    <ul
      className={clsx(
        'flex flex-wrap gap-x-4 gap-y-2 text-neutral-900',
        className
      )}
    >
      <li className="flex items-center gap-1.5">
        <figure>
          <Image src={servingsIcon} alt="" unoptimized />
        </figure>
        Porciones: {servings}
      </li>
      <li className="flex items-center gap-1.5">
        <figure>
          <Image src={prepIcon} alt="" unoptimized />
        </figure>
        Preparación: {prep} min
      </li>
      <li className="flex items-center gap-1.5">
        <figure>
          <Image src={cookIcon} alt="" unoptimized />
        </figure>
        Cocción: {cook} min
      </li>
    </ul>
  )
}
