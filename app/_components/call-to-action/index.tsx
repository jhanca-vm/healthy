import clsx from 'clsx/lite'
import Image from 'next/image'
import Link from 'next/link'
import fork from './fork.svg'
import knife from './knife.svg'

export default function CallToAction() {
  return (
    <section
      className={clsx(
        'overflow-hidden relative py-12 px-4 rounded-3xl bg-neutral-200',
        'text-center sm:py-20 sm:px-8 xl:py-24'
      )}
    >
      <div className="relative z-1">
        <h2
          className={clsx(
            'font-display font-extrabold text-3xl text-neutral-900',
            'sm:text-4xl'
          )}
        >
          ¿Listo para cocinar más sano?
        </h2>
        <p
          className={clsx(
            'mt-3 mb-8 font-medium text-xl/normal tracking-tight text-pretty',
            'sm:mb-10'
          )}
        >
          Haz clic en el botón, elige una receta y sirve en la mesa.
        </p>
        <Link
          className={clsx(
            'py-4 px-6 inline-block rounded-xl bg-neutral-900 font-display',
            'font-bold text-lg text-white transition-colors',
            'hover:bg-neutral-800 sm:px-8 sm:text-xl sm:tracking-tighter'
          )}
          href="/recetas"
        >
          Explorar recetas
        </Link>
      </div>
      <Image
        className={clsx(
          'absolute -top-12.5 -right-5 w-43 hidden sm:block xl:top-6',
          'xl:-right-17.5 xl:w-84.5'
        )}
        src={knife}
        alt=""
        unoptimized
      />
      <Image
        className={clsx(
          'absolute -bottom-14 -left-12 w-45 hidden sm:block xl:-bottom-5',
          'xl:-left-18 xl:w-78.5'
        )}
        src={fork}
        alt=""
        unoptimized
      />
    </section>
  )
}
