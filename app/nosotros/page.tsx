import type { Metadata } from 'next'
import CallToAction from '@/app/_components/call-to-action'
import Manifesto from './manifesto'
import Mission from './mission'
import Philosophy from './philosophy'
import SocialImpact from './social-impact'

const description =
  'Aquí ofrecemos platos rápidos y con ingredientes reales que cualquiera ' +
  'puede preparar. No necesitas equipo sofisticado ni productos ' +
  'ultraprocesados, solo ingredientes de verdad y pasos sencillos.'

export const metadata: Metadata = { title: 'Nosotros - Healthy', description }

export default function AboutPage() {
  return (
    <>
      <Mission description={description} />
      <hr className="mt-16 mb-12 border-neutral-300 sm:my-20 xl:my-24" />
      <Manifesto />
      <hr className="my-12 border-neutral-300 sm:my-20 xl:my-24" />
      <Philosophy />
      <hr className="my-12 border-neutral-300 sm:my-20 xl:my-24" />
      <SocialImpact />
      <CallToAction />
    </>
  )
}
