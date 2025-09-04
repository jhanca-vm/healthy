import clsx from 'clsx/lite'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import ListItem from '@/app/_components/list-item'
import Card from '../_components/card'
import Details from '../_components/details'
import getRandomRecipes from '../_lib/get-random-recipes'
import getRecipe from '../_lib/get-recipe'

export async function generateMetadata({
  params
}: PageProps<'/recetas/[slug]'>) {
  const { slug } = await params
  const recipe = await getRecipe(slug)

  return {
    title: recipe?.name && `${recipe.name} - Healthy`,
    description: recipe?.description
  }
}

export default async function RecipePage({
  params
}: PageProps<'/recetas/[slug]'>) {
  const { slug } = await params

  const [recipe, others] = await Promise.all([
    getRecipe(slug),
    getRandomRecipes(slug)
  ])

  if (!recipe) notFound()

  return (
    <>
      <section className="mt-4 grid gap-10 sm:mt-12 lg:grid-cols-2">
        <picture>
          <source
            srcSet={`/images/${recipe.slug}-lg.webp`}
            media="(width >= 40rem)"
            width={1024}
            height={1024}
          />
          <Image
            className="w-full rounded-xl sm:rounded-4xl"
            src={`/images/${recipe.slug}-sm.webp`}
            alt=""
            width={500}
            height={500}
            priority
          />
        </picture>
        <div>
          <h1
            className={clsx(
              'font-display font-extrabold text-3xl text-balance',
              'text-neutral-900 sm:text-4xl'
            )}
          >
            {recipe.name}
          </h1>
          <p className="my-5 font-medium text-xl/normal tracking-tight">
            {recipe.description}
          </p>
          <Details
            className="font-display font-semibold text-lg"
            servings={recipe.servings}
            prep={recipe.prepMinutes}
            cook={recipe.cookMinutes}
          />
          <h2 className="mt-5 mb-4 font-display font-bold text-2xl">
            Ingredientes:
          </h2>
          <ul
            className={
              'flex flex-col gap-2 font-medium text-xl/normal tracking-tight'
            }
          >
            {recipe.ingredients.map((ingredient) => (
              <ListItem key={ingredient}>{ingredient}</ListItem>
            ))}
          </ul>
          <h2 className="mt-5 mb-4 font-display font-bold text-2xl">
            Instrucciones:
          </h2>
          <ul
            className={
              'flex flex-col gap-2 font-medium text-xl/normal tracking-tight'
            }
          >
            {recipe.instructions.map((instruction) => (
              <ListItem key={instruction}>{instruction}</ListItem>
            ))}
          </ul>
        </div>
      </section>
      <hr className="my-12 border-neutral-300" />
      <section className="mb-6">
        <h2 className="mb-6 font-display font-bold text-3xl">Más recetas</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((recipe) => (
            <Card recipe={recipe} key={recipe.slug} />
          ))}
        </div>
      </section>
      <hr className="mt-12 border-neutral-300" />
    </>
  )
}
