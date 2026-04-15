import type { Metadata } from 'next'
import BuildForm from '@/components/BuildForm'

export const metadata: Metadata = {
  title: 'Build Your Home — Elec Reid',
  description:
    'Tell us about your project and we\'ll design a smart home system around how you actually live.',
}

export default function BuildPage() {
  return <BuildForm />
}
