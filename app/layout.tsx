import type { Metadata } from 'next'

import { Hanken_Grotesk, Newsreader } from 'next/font/google'
import { SkipLink } from '@/components/ui/skip-link'
import { Toaster } from '@/components/ui/sonner'
import '@/styles/globals.css'


const hanken = Hanken_Grotesk({
  subsets:  ['latin'],
  variable: '--font-sans',
  display:  'swap',
})

const newsreader = Newsreader({
  subsets:  ['latin'],
  variable: '--font-display',
  display:  'swap',
  style:    ['normal', 'italic'],  // ← italic needed for hero "love"
})

export const metadata: Metadata = {
  title: {
    default:  "Dr. Prem's Animal Hospital & Path Lab — Muzaffarnagar",
    template: "%s | Dr. Prem's Animal Hospital",
  },
  description:
    'Expert veterinary care in Muzaffarnagar by Dr. Prem Kumar -' +
    'retired Director, Animal Husbandry Dept. Uttarakhand. ' +
    '40+ years experience. Online consultations and in-clinic visits.',
  keywords: [
    'veterinarian Muzaffarnagar',
    'vet clinic UP',
    'animal hospital Muzaffarnagar',
    'dog vaccination Muzaffarnagar',
    'online vet consultation India',
    'पशु चिकित्सक मुजफ्फरनगर',
  ],
  authors:  [{ name: 'Dr. Prem Kumar' }],
  creator:  "Dr. Prem's Animal Hospital & Path Lab",
  openGraph: {
    type:        'website',
    locale:      'en_IN',
    url:         'https://drpremsanimalhospital.com',
    siteName:    "Dr. Prem's Animal Hospital & Path Lab",
    title:       "Dr. Prem's Animal Hospital & Path Lab — Muzaffarnagar",
    description: 'Expert veterinary care in Muzaffarnagar. Book online or in-clinic.',
    images: [{
      url:    '/images/og-image.png',
      width:  1200,
      height: 630,
      alt:    "Dr. Prem's Animal Hospital & Path Lab",
    }],
  },
  twitter: {
    card:  'summary_large_image',
    title: "Dr. Prem's Animal Hospital & Path Lab",
  },
  robots: {
    index:  true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <html
    lang="en"
    className={`${hanken.variable} ${newsreader.variable}`}
   >
      <body>
        {/* Keyboard users skip straight to content */}
        <SkipLink />

        {/* Main content landmark — SkipLink target */}
        <main id="main-content">
          {children}
        </main>

        {/* Toast notifications */}
        <Toaster />
      </body>
    </html>
  )
}