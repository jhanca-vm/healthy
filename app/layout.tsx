import clsx from 'clsx/lite'
import { Nunito, Nunito_Sans } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import type { PropsWithChildren } from 'react'
import Menu from './_components/menu'
import logo from './logo.webp'
import './style.css'

const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' })

const nunito_sans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans'
})

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="es" className={clsx(nunito.variable, nunito_sans.variable)}>
      <body
        className={clsx(
          'min-h-dvh flex flex-col bg-neutral-100 text-neutral-800',
          'tracking-normal'
        )}
      >
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
        <main className="px-4 grow flex flex-col sm:px-8">
          <div className="size-full max-w-298 mx-auto grow flex flex-col">
            {children}
          </div>
        </main>
        <footer className="py-10 font-medium text-center text-neutral-900">
          © 2025{' '}
          <a
            className="hover:text-neutral-800"
            href="https://jhanca.pages.dev/"
            target="_blank"
            rel="noreferrer"
          >
            Jhan Viloria
          </a>
        </footer>
      </body>
    </html>
  )
}
