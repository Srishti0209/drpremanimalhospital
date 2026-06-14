import { Hero } from '@/components/sections/Hero'
import { Stats } from '@/components/sections/Stats'
import { ServicesSummary } from '@/components/sections/services/ServicesSummary'
import { PathLabBand } from '@/components/sections/services/PathLabBand'
import { AboutSummary } from '@/components/sections/about/AboutSummary'
import { BookingCTA } from '@/components/sections/BookingCTA'
import { BlogPreview } from '@/components/sections/blog/BlogPreview'

// ISR — revalidate every hour
export const revalidate = 3600

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesSummary />
      <PathLabBand />
      <AboutSummary />
      <BookingCTA />
      <BlogPreview />
    </>
  )
}
