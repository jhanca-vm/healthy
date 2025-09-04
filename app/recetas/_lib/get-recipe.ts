import { eq } from 'drizzle-orm'
import { cache } from 'react'
import db from '@/db'
import { recipes } from '@/db/schema'

export default cache(
  async (slug: string): Promise<typeof recipes.$inferSelect | undefined> => {
    const [data] = await db.select().from(recipes).where(eq(recipes.slug, slug))

    return data
  }
)
