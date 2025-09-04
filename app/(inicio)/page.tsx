import type { Metadata } from 'next'
import CallToAction from '@/app/_components/call-to-action'
import Features from './features'
import Hero from './hero'
import ValueProposition from './value-proposition'

const description =
  'Descubre recetas rápidas, con alimentos integrales, sin ultraprocesados.'

export const metadata: Metadata = { title: 'Healthy', description }

export default function HomePage() {
  return (
    <>
      <Hero description={description} />
      <Features />
      <hr className="my-20 hidden border-neutral-300 sm:block xl:my-24" />
      <ValueProposition />
      <CallToAction />
    </>
  )
}
