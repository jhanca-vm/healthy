import { defineConfig } from 'drizzle-kit'

if (!process.env.TURSO_DATABASE_URL || !process.env.TURSO_AUTH_TOKEN) {
  throw new Error('Missing required environment variables')
}

export default defineConfig({
  dialect: 'turso',
  schema: './db/schema.ts',
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL,
    authToken: process.env.TURSO_AUTH_TOKEN
  }
})
