import clsx from 'clsx/lite'
import Image from 'next/image'
import imageLg from './image-lg.webp'
import imageSm from './image-sm.webp'

export default function ValueProposition() {
  return (
    <section
      className={clsx(
        'my-16 flex flex-col gap-8 sm:my-20 sm:gap-10 xl:my-24 xl:flex-row',
        'xl:items-center xl:gap-12'
      )}
    >
      <div className="xl:basis-127">
        <h2
          className={clsx(
            'font-display font-extrabold text-3xl text-pretty',
            'text-neutral-900 sm:text-4xl'
          )}
        >
          Hecho para tu día a día
        </h2>
        <p className="my-5 font-medium text-xl/normal tracking-tight">
          Cocinar no debería ser complicado. Estas recetas se preparan en menos
          de <strong>30 minutos</strong>, se adaptan a horarios ocupados y saben
          tan bien que querrá repetirlas.
        </p>
        <p className="font-medium text-xl/normal tracking-tight">
          No importa si eres nuevo en la cocina o solo necesitas ideas frescas,
          tenemos todo lo que buscas.
        </p>
      </div>
      <picture className="xl:flex-1">
        <source
          srcSet={imageLg.src}
          media="(width >= 40rem)"
          width={imageLg.width}
          height={imageLg.height}
        />
        <Image
          className="w-full rounded-xl sm:rounded-3xl"
          src={imageSm}
          alt=""
        />
      </picture>
    </section>
  )
}
