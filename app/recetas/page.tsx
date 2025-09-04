import clsx from 'clsx/lite'
import type { Metadata } from 'next'
import db from '@/db'
import { recipes } from '@/db/schema'
import Recipes from './_components/recipes'

const description =
  'Descubre recetas rápidas, con ingredientes integrales y un sabor ' +
  'increíble. Usa la barra de búsqueda para encontrar una receta por nombre ' +
  'o por ingrediente, o simplemente navega por la lista y deja que algo ' +
  'delicioso te llame la atención.'

export const metadata: Metadata = { title: 'Recetas - Healthy', description }

export default async function RecipesPage() {
  const data = await db.select().from(recipes)

  return (
    <>
      <section
        className={
          'my-12 mx-auto sm:mt-16 xl:max-w-3xl xl:mt-20 xl:mb-16 xl:text-center'
        }
      >
        <h1
          className={clsx(
            'font-display font-extrabold text-3xl text-pretty',
            'text-neutral-900 sm:text-4xl'
          )}
        >
          Explora nuestras recetas saludables y sencillas
        </h1>
        <p className="mt-3 font-medium text-xl/normal tracking-tight">
          {description}
        </p>
      </section>
      <Recipes data={data} />
      <hr className="mt-12 border-neutral-300" />
    </>
  )
}
