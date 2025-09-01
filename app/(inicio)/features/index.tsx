import clsx from 'clsx/lite'
import Image from 'next/image'
import bolt from './bolt.svg'
import carrot from './carrot.svg'
import search from './search.svg'

const list = [
  [
    carrot,
    'Recetas saludables',
    'Cada plato se prepara con ingredientes cotidianos y sin procesar.'
  ],
  [
    bolt,
    'Cero complicaciones',
    'Todas las recetas están diseñadas para que comer sano sea rápido y ' +
      'sencillo.'
  ],
  [
    search,
    'Busquedas en segundos',
    'Filtra por nombre o ingrediente y encuentra al instante la receta que ' +
      'necesitas.'
  ]
]

export default function Features() {
  return (
    <section className="mt-16 sm:mt-20 xl:mt-24">
      <h2
        className={clsx(
          'font-display font-extrabold text-3xl text-neutral-900 sm:text-4xl',
          'xl:text-center'
        )}
      >
        Lo que encontrarás
      </h2>
      <ul className="mt-8 grid gap-6 sm:mt-12 sm:gap-8 xl:grid-cols-3">
        {list.map(([icon, name, description]) => (
          <li key={icon.src}>
            <figure
              className={clsx(
                'size-15 mb-5 flex border border-neutral-200 rounded-2xl',
                'bg-white sm:mb-6'
              )}
            >
              <Image className="m-auto" src={icon} alt="" unoptimized />
            </figure>
            <h3 className="font-bold text-2xl text-neutral-900 sm:text-3xl">
              {name}
            </h3>
            <p
              className={
                'mt-3 font-medium text-xl/normal tracking-tight xl:text-balance'
              }
            >
              {description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
