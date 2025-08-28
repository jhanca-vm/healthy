import clsx from 'clsx/lite'
import { Nunito, Nunito_Sans } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import type { PropsWithChildren } from 'react'
import logo from './logo.webp'
import Menu from './menu'
import './style.css'

const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' })

const nunito_sans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans'
})

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="es" className={clsx(nunito.variable, nunito_sans.variable)}>
      <body className="bg-neutral-100 text-neutral-800 tracking-normal">
        <header
          className={'p-4 border-b border-neutral-300 sm:p-8 sm:pb-5 xl:pt-5'}
        >
          <nav className="max-w-298 mx-auto flex items-center justify-between">
            <Link href="/">
              <Image
                className="h-8 w-auto sm:h-10"
                src={logo}
                alt="Healthy"
                priority
              />
            </Link>
            <Menu />
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
