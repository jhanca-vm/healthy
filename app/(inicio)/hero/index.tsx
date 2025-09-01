import clsx from 'clsx/lite'
import Image from 'next/image'
import Link from 'next/link'
import imageLg from './image-lg.webp'
import imageSm from './image-sm.webp'
import squiggle from './squiggle.svg'

interface Props {
  description: string
}

export default function Hero({ description }: Props) {
  return (
    <section className="mt-12 xl:mt-20 xl:text-center">
      <h1
        className={clsx(
          'font-display font-extrabold text-4xl text-neutral-900 sm:text-6xl',
          'sm:text-balance xl:text-[4.5rem]'
        )}
      >
        Comidas{' '}
        <span className="relative whitespace-nowrap">
          saludables
          <span
            className={clsx(
              'absolute inset-x-0 bottom-2 -z-1 h-4.75 rounded-sm',
              'bg-orange-500/40 sm:bottom-3 sm:h-6.25 xl:h-9.75'
            )}
          />
        </span>
        , sin complicaciones
      </h1>
      <p className="mt-4 mb-8 font-medium text-xl/normal tracking-tight">
        {description}
      </p>
      <Link
        className={clsx(
          'py-4 px-6 inline-block rounded-xl bg-neutral-900 font-display',
          'font-bold text-lg text-white transition-colors',
          'hover:bg-neutral-800 sm:px-8 sm:text-xl'
        )}
        href="/recetas"
      >
        Comenzar a explorar
      </Link>
      <picture className="mt-10 flex xl:mt-20">
        <source
          srcSet={imageLg.src}
          media="(width >= 40rem)"
          width={imageLg.width}
          height={imageLg.height}
        />
        <Image
          className={clsx(
            'w-full rounded-sm ring-4 ring-white sm:rounded-lg sm:ring-8',
            'xl:rounded-2xl xl:ring-12'
          )}
          src={imageSm}
          alt=""
          priority
        />
      </picture>
      <Image
        className="absolute inset-x-0 -z-1 w-full -mt-18 -translate-y-full"
        src={squiggle}
        alt=""
        unoptimized
      />
    </section>
  )
}
