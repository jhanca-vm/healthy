import clsx from 'clsx/lite'
import Image from 'next/image'
import imageLg from './image-lg.webp'
import imageSm from './image-sm.webp'

export default function SocialImpact() {
  return (
    <section
      className={clsx(
        'mb-12 flex flex-col gap-8 sm:mb-20 sm:gap-10 xl:mb-24 xl:flex-row',
        'xl:items-center xl:gap-16'
      )}
    >
      <div className="font-medium text-xl/normal tracking-tight xl:basis-94">
        <h2
          className={clsx(
            'font-display font-extrabold text-3xl text-neutral-900',
            'sm:text-4xl'
          )}
        >
          Más allá del plato
        </h2>
        <p className="mt-5 mb-3 text-pretty">
          Creemos que la comida es un catalizador para la comunidad y el
          bienestar. Al compartir recetas accesibles, esperamos:
        </p>
        <ul className="pl-8 list-disc">
          <li>Fomentar las cenas familiares y la cocina en grupo.</li>
          <li>
            Reducir la dependencia de los empaques de un solo uso y los residuos
            de entregas a domicilio.
          </li>
          <li>
            Despertar la curiosidad sobre los productos de temporada y la
            agricultura local.
          </li>
        </ul>
      </div>
      <picture className="xl:flex-1">
        <source
          srcSet={imageLg.src}
          media="(width >= 40rem)"
          width={imageLg.width}
          height={imageLg.height}
        />
        <Image
          className="w-full rounded-xl sm:rounded-4xl"
          src={imageSm}
          alt=""
          priority
        />
      </picture>
    </section>
  )
}
