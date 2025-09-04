'use client'

import clsx from 'clsx'
import debounce from 'just-debounce-it'
import Image from 'next/image'
import { type FormEvent, useState } from 'react'
import type { recipes } from '@/db/schema'
import Card from '../card'
import Select from '../select'
import search from './search.svg'

interface Props {
  data: Array<typeof recipes.$inferSelect>
}

export default function Recipes({ data }: Props) {
  const [maxPrepTime, setMaxPrepTime] = useState<number | null>(null)
  const [maxCookTime, setMaxCookTime] = useState<number | null>(null)
  const [query, setQuery] = useState('')

  const results = data.filter((recipe) => {
    return (
      (maxPrepTime === null || recipe.prepMinutes <= maxPrepTime) &&
      (maxCookTime === null || recipe.cookMinutes <= maxCookTime) &&
      (recipe.name.toLowerCase().includes(query.toLowerCase()) ||
        recipe.ingredients
          .join(' ')
          .toLowerCase()
          .includes(query.toLowerCase()))
    )
  })

  return (
    <section className="mb-6">
      <div
        className={clsx(
          'mb-6 grid gap-3 text-neutral-900 sm:grid-cols-2 lg:flex',
          'lg:justify-between lg:gap-4'
        )}
      >
        <div className="contents lg:flex lg:gap-4">
          <Select
            label="Tiempo máximo de preparación"
            items={[5, 10, null]}
            value={maxPrepTime}
            onChange={setMaxPrepTime}
          />
          <Select
            label="Tiempo máximo de cocción"
            items={[0, 5, 10, 15, 20, null]}
            value={maxCookTime}
            onChange={setMaxCookTime}
          />
        </div>
        <label
          className={clsx(
            'w-full max-w-83 py-2.5 px-4 flex items-center gap-2 rounded-xl',
            'ring ring-neutral-300 bg-white font-display font-semibold',
            'text-lg transition-colors hover:ring-neutral-900'
          )}
        >
          <figure>
            <Image src={search} alt="" unoptimized />
          </figure>
          <input
            className="w-full outline-0 placeholder:text-neutral-900/70"
            type="text"
            placeholder="Buscar por nombre o ingrediente…"
            onInput={debounce((event: FormEvent) => {
              const target = event.target as HTMLInputElement
              setQuery(target.value)
            }, 300)}
          />
        </label>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((recipe, index) => (
          <Card recipe={recipe} index={index} key={recipe.slug} />
        ))}
      </div>
    </section>
  )
}
