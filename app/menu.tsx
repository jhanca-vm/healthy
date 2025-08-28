'use client'

import clsx from 'clsx/lite'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  ['/nosotros', 'Nosotros'],
  ['/recetas', 'Recetas']
]

export default function Menu() {
  const pathname = usePathname()

  return (
    <div
      className={
        'flex gap-10 font-display font-semibold text-neutral-900 sm:text-lg'
      }
    >
      {links.map(([href, label]) => (
        <Link className="group relative" href={href} key={href}>
          {label}
          <span
            className={clsx(
              'absolute inset-x-0 top-7.25 h-0.75 rounded-full',
              pathname === href
                ? 'bg-orange-500'
                : 'group-hover:bg-neutral-300',
              'transition-colors'
            )}
          />
        </Link>
      ))}
    </div>
  )
}
