import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const recipes = sqliteTable('recipes', {
  slug: text().primaryKey(),
  name: text().notNull(),
  description: text().notNull(),
  servings: integer({ mode: 'number' }).notNull(),
  prepMinutes: integer({ mode: 'number' }).notNull(),
  cookMinutes: integer({ mode: 'number' }).notNull(),
  ingredients: text({ mode: 'json' }).$type<string[]>().notNull(),
  instructions: text({ mode: 'json' }).$type<string[]>().notNull()
})
