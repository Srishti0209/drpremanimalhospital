import Link from 'next/link'
import Image from 'next/image'

const COPY = {
  logoAlt:    "Dr. Prem's Animal Hospital logo",
  clinicName: "Dr. Prem's Animal Hospital",
  labSuffix:  '& Pathology Lab',
  tagline:    'Expert veterinary care in Muzaffarnagar, led by Dr. Prem Kumar — retired Director of Animal Husbandry, Uttarakhand. Cattle, pets & poultry welcome.',

  exploreLabel: 'Explore',
  hoursLabel:   'Clinic hours',
  contactLabel: 'Get in touch',

  phone:     '7895881063',
  address:   'Khanjanpur,\nMuzaffarnagar, UP',
  hours1:    'Mon–Sat: 9am – 2pm',
  hours2:    'Mon–Sat: 4pm – 5pm',
  closed:    'Sunday: Closed',

  bookCTA:    'Book a visit',
  copyright:  `© ${new Date().getFullYear()} Dr. Prem's Animal Hospital & Pathology Lab, Muzaffarnagar`,
  madeWith:   'Made with care for animals & the people who love them',
} as const

const EXPLORE_LINKS = [
  { href: '/',         label: 'Home' },
  { href: '/about',    label: 'About Dr. Prem' },
  { href: '/services', label: 'Services & Path Lab' },
  { href: '/blog',     label: 'Blog' },
] as const

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-container mx-auto px-10 pt-14 pb-7">

        {/* 4-col grid */}
        <div
          className="grid gap-10 pb-[34px] border-b border-white/10"
          style={{ gridTemplateColumns: '2fr 1fr 1fr 1.1fr' }}
        >

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-[46px] h-[46px] rounded-[11px] bg-white flex items-center justify-center flex-shrink-0">
                <Image
                  src="/images/logo.svg"
                  alt={COPY.logoAlt}
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div>
                <div className="font-display font-semibold text-[17px] text-white">{COPY.clinicName}</div>
                <div className="font-sans text-[11px] tracking-[1.5px] uppercase text-accent-muted font-bold">{COPY.labSuffix}</div>
              </div>
            </div>
            <p className="font-sans text-[14px] text-[#A9BBD6] leading-[1.75] max-w-[330px]">
              {COPY.tagline}
            </p>
          </div>

          {/* Explore */}
          <div>
            <h2 className="font-sans text-[12px] font-bold tracking-[1.5px] uppercase text-[#7E97B8] mb-4">
              {COPY.exploreLabel}
            </h2>
            <ul role="list" className="space-y-[11px]">
              {EXPLORE_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-sans text-[14px] text-[#C7D6EC] hover:text-white motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h2 className="font-sans text-[12px] font-bold tracking-[1.5px] uppercase text-[#7E97B8] mb-4">
              {COPY.hoursLabel}
            </h2>
            <div className="space-y-[9px] font-sans text-[14px]">
              <p className="text-[#C7D6EC]">{COPY.hours1}</p>
              <p className="text-[#C7D6EC]">{COPY.hours2}</p>
              <p className="text-[#E2867E]">{COPY.closed}</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-sans text-[12px] font-bold tracking-[1.5px] uppercase text-[#7E97B8] mb-4">
              {COPY.contactLabel}
            </h2>
            <a
              href={`tel:+91${COPY.phone}`}
              className="font-sans text-[15px] text-accent-muted font-bold mb-[9px] block hover:text-white motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded-sm"
            >
              {COPY.phone}
            </a>
            <p className="font-sans text-[14px] text-[#C7D6EC] leading-[1.6] mb-4 whitespace-pre-line">
              {COPY.address}
            </p>
            <Link
              href="/book"
              className="inline-block bg-accent hover:bg-accent-dark text-white font-sans font-bold text-[14px] px-5 py-2.5 rounded-[9px] motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              {COPY.bookCTA}
            </Link>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-[22px] flex items-center justify-between flex-wrap gap-3 font-sans text-[12.5px] text-[#5E75A0]">
          <p>{COPY.copyright}</p>
          <p>{COPY.madeWith}</p>
        </div>

      </div>
    </footer>
  )
}
