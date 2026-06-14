import type { Metadata } from 'next'
import { AboutDetail } from '@/components/sections/about/AboutDetail'

export const metadata: Metadata = {
  title: 'About Dr. Prem Kumar',
  description:
    'Meet Dr. Prem Kumar — B.V.Sc AH, M.V.Sc Veterinary Pathology. ' +
    'Retired Director of Animal Husbandry Department, Uttarakhand, with 40+ years of experience ' +
    'in veterinary medicine, pathology, and animal welfare.',
}

// SSG — rebuild only on deploy
export const revalidate = false

export default function AboutPage() {
  return <AboutDetail />
}
