import Image from 'next/image'
import Link from 'next/link'

const COPY = {
  sectionLabel: 'About the doctor',
  heading:      'Meet Dr. Prem Kumar',
  quote:        '"Every animal deserves the same quality of care and attention — whether it is a prized cow or a beloved family pet."',
  highlights: [
    'Retired Director, Animal Husbandry Dept., Uttarakhand',
    '40+ years in veterinary medicine & pathology',
    'Served multiple animal welfare non-profits',
    'Specialist in large animals, pets & poultry',
  ],
  cta:      'Read his full story',
  photoAlt: 'Dr. Prem Kumar — veterinarian and pathologist with 40 years of experience',
} as const

function CheckIcon() {
  return (
    <svg
      width="18" height="18" viewBox="0 0 24 24"
      fill="none" stroke="#4C9A2A" strokeWidth="2.4"
      className="flex-shrink-0 mt-[2px]"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export function AboutSummary() {
  return (
    <section
      aria-labelledby="about-heading"
      className="bg-cream"
    >
      <div className="max-w-container mx-auto px-10 py-[80px] grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-[54px] items-center">

        {/* ── Left: photo with decorative frame ── */}
        <div className="relative mx-auto md:mx-0 w-full max-w-sm md:max-w-none">
          {/* Decorative border offset behind photo */}
          <div
            aria-hidden="true"
            className="absolute border-2 border-[#DCEACB] rounded-[20px]"
            style={{ inset: '-12px 14px 14px -12px' }}
          />
          <div className="relative w-full h-[420px] rounded-[18px] overflow-hidden shadow-hero">
            <Image
              src="/images/prem.jpeg"
              alt={COPY.photoAlt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
        </div>

        {/* ── Right: content ── */}
        <div>
          <p className="font-sans text-[13px] font-bold tracking-[2px] uppercase text-accent mb-3">
            {COPY.sectionLabel}
          </p>
          <h2
            id="about-heading"
            className="font-display font-[500] text-[38px] text-primary tracking-[-0.5px] mb-[22px]"
          >
            {COPY.heading}
          </h2>

          {/* Pull quote */}
          <blockquote
            className="font-display italic text-[21px] text-[#4A5568] leading-[1.6] border-l-[3px] border-accent pl-5 mb-[26px]"
          >
            {COPY.quote}
          </blockquote>

          {/* 2-col highlights */}
          <ul
            role="list"
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-[30px]"
          >
            {COPY.highlights.map(item => (
              <li key={item} className="flex items-start gap-[11px]">
                <CheckIcon />
                <span className="font-sans text-[14px] text-[#3A4453] leading-[1.5] font-[500]">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* Text CTA */}
          <Link
            href="/about"
            className="inline-flex items-center gap-[9px] font-sans text-[15px] font-bold text-primary border-b-2 border-accent pb-1 hover:text-accent-dark motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
          >
            {COPY.cta}
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#4C9A2A" strokeWidth="2.4" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  )
}
