import type { Metadata } from 'next'
import { ServicesDetail } from '@/components/sections/services/ServicesDetail'

export const metadata: Metadata = {
  title: 'Services & Path Lab',
  description:
    'Pathology lab & diagnostics, medical consultations, vaccinations, deworming, emergency care, ' +
    'farm visits and more — all under one roof in Muzaffarnagar. In-house blood, urine & stool testing.',
}

// SSG — rebuild only on deploy
export const revalidate = false

export default function ServicesPage() {
  return <ServicesDetail />
}
