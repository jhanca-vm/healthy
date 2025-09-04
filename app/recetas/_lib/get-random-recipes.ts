import { ne, sql } from 'drizzle-orm'
import db from '@/db'
import { recipes } from '@/db/schema'

export default function getRandomRecipes(slug: string) {
  return db
    .select()
    .from(recipes)
    .where(ne(recipes.slug, slug))
    .orderBy(sql`RANDOM()`)
    .limit(3)
}
