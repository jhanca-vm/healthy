import Image from 'next/image'
import type { PropsWithChildren } from 'react'
import arrow from './arrow.svg'

export default function ListItem({ children }: PropsWithChildren) {
  return (
    <li className="flex items-start gap-5">
      <Image src={arrow} alt="" unoptimized />
      <div>{children}</div>
    </li>
  )
}
