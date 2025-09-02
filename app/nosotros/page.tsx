import type { Metadata } from 'next'
import CallToAction from '@/_components/call-to-action'
import Rule from '@/_components/rule'
import Manifesto from './manifesto'
import Mission from './mission'
import Philosophy from './philosophy'
import SocialImpact from './social-impact'

export const metadata: Metadata = { title: 'Nosotros - Healthy' }

export default function AboutPage() {
  return (
    <>
      <Mission />
      <Rule className="mt-16 mb-12" />
      <Manifesto />
      <Rule className="my-12" />
      <Philosophy />
      <Rule className="my-12" />
      <SocialImpact />
      <CallToAction />
    </>
  )
}
