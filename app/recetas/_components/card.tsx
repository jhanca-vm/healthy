import clsx from 'clsx/lite'
import Image from 'next/image'
import Link from 'next/link'
import type { recipes } from '@/db/schema'
import Details from './details'

interface Props {
  recipe: typeof recipes.$inferSelect
  index?: number
}

export default function Card({ recipe, index }: Props) {
  return (
    <article
      className={clsx(
        'overflow-hidden p-2 rounded-xl border border-neutral-300 shadow-md',
        'shadow-neutral-900/16 bg-white'
      )}
    >
      <Image
        className="w-full rounded-xl"
        src={`/images/${recipe.slug}-sm.webp`}
        alt=""
        width={500}
        height={500}
        priority={index !== undefined && index < 3}
      />
      <div className="my-4 px-2 font-medium">
        <h2
          className="font-display font-bold text-xl truncate"
          title={recipe.name}
        >
          {recipe.name}
        </h2>
        <p className="mt-2.5 mb-4 line-clamp-2" title={recipe.description}>
          {recipe.description}
        </p>
        <Details
          servings={recipe.servings}
          prep={recipe.prepMinutes}
          cook={recipe.cookMinutes}
        />
      </div>
      <Link
        className={clsx(
          'p-3 block rounded-full bg-neutral-900 font-bold text-center',
          'text-white transition-colors hover:bg-neutral-800'
        )}
        href={`/recetas/${recipe.slug}`}
      >
        Ver Receta
      </Link>
    </article>
  )
}
