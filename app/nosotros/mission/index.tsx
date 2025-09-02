import clsx from 'clsx/lite'
import Image from 'next/image'
import imageLg from './image-lg.webp'
import imageSm from './image-sm.webp'
import squiggle from './squiggle.svg'

export default function Mission() {
  return (
    <section
      className={clsx(
        'relative mt-12 flex flex-col gap-10 sm:mt-16 sm:gap-16 xl:mt-20',
        'xl:flex-row xl:items-center'
      )}
    >
      <div className="xl:basis-127.5">
        <hgroup className="text-neutral-900">
          <h1
            className={clsx(
              'py-0.5 px-1.5 w-fit rounded-md bg-orange-500 font-display',
              'font-bold text-xl'
            )}
          >
            Nuestra misión
          </h1>
          <p
            className={clsx(
              'my-6 font-display font-extrabold text-3xl text-balance',
              'text-neutral-900 sm:text-4xl'
            )}
          >
            Ayudar a más personas a cocinar comidas nutritivas, más a menudo.
          </p>
        </hgroup>
        <p className="my-4 font-medium text-xl/normal tracking-tight">
          Healthy fue creado para demostrar que comer sano puede ser
          conveniente, asequible y realmente delicioso.
        </p>
        <p className="font-medium text-xl/normal tracking-tight">
          Aquí ofrecemos platos rápidos y con ingredientes reales que cualquiera
          puede preparar. No necesitas equipo sofisticado ni productos
          ultraprocesados, solo ingredientes de verdad y pasos sencillos.
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
          className="w-full rounded-xl sm:rounded-4xl"
          src={imageSm}
          alt=""
          priority
        />
      </picture>
      <Image
        className="absolute bottom-30 -right-20 hidden xl:block"
        src={squiggle}
        alt=""
        unoptimized
      />
    </section>
  )
}
