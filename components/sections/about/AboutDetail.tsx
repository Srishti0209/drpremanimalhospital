import Image from 'next/image'
import Link from 'next/link'

// ─── Copy ────────────────────────────────────────────────────────────────────

const COPY = {
  // Hero
  sectionLabel: 'About the doctor',
  heroHeading:  'Dr. Prem Kumar',
  heroBody:     'A veterinarian, pathologist and public-health leader who has spent more than four decades caring for animals — from village cattle sheds to the office of the Director of Animal Husbandry, Uttarakhand.',
  credentials: [
    { label: 'B.V.Sc & A.H.',                   style: 'green'  as const },
    { label: 'M.V.Sc — Veterinary Pathology',    style: 'green'  as const },
    { label: 'Retd. Director, AH Dept. Uttarakhand', style: 'white' as const },
  ],
  stat1: { value: '40+',   label: 'YEARS' },
  stat2: { value: '1000s', label: 'ANIMALS CARED FOR' },
  photoAlt: 'Dr. Prem Kumar — veterinarian and pathologist',

  // Bio
  bioHeading: 'A lifetime dedicated to animal health',
  bio1: 'Dr. Prem Kumar began his journey with a Bachelor\'s in Veterinary Science & Animal Husbandry, followed by a Master\'s in Veterinary Pathology — the science of understanding disease through laboratory diagnosis. It is a foundation that still shapes how he practices today: look closely, test carefully, treat precisely.',
  bio2: 'Over a distinguished career in government service, he rose to become Director of the Animal Husbandry Department, Uttarakhand — leading veterinary services, disease-control programmes and livestock welfare across the state. That work took him from modern laboratories to remote villages, treating everything from dairy herds to household pets.',
  bio3: 'After retirement, rather than slow down, he opened Dr. Prem\'s Animal Hospital & Pathology Lab in Muzaffarnagar — bringing genuine diagnostic capability and decades of judgement to his home community. He continues to volunteer with animal-welfare non-profits, because he believes good care should never depend on whether an animal\'s owner can afford the best.',
  quote:       '"Animals can\'t tell us where it hurts. The lab, and a lifetime of listening closely, is how we find out."',
  quoteAuthor: '— Dr. Prem Kumar',

  // Credentials sidebar
  expertiseLabel: 'Areas of expertise',
  expertise: [
    { title: 'Veterinary Pathology',           desc: 'Laboratory diagnosis & disease investigation' },
    { title: 'Large-animal & dairy medicine',  desc: 'Cattle & buffalo health, herd management' },
    { title: 'Companion-animal care',          desc: 'Dogs & cats — medicine & prevention' },
    { title: 'Poultry health',                 desc: 'Flock disease control & vaccination' },
    { title: 'Public veterinary leadership',   desc: 'State-level programmes & welfare work' },
  ],
  bookCTA: 'Book a consultation',

  // Timeline
  timelineLabel:   'The journey',
  timelineHeading: 'Four decades, one calling',
  timeline: [
    {
      phase:       'Foundation',
      title:       'Education',
      description: 'B.V.Sc & A.H., then an M.V.Sc specialising in Veterinary Pathology.',
      iconBg:      '#E7EEF7',
      iconStroke:  '#1E4E8C',
      iconPath:    'M22 10 12 5 2 10l10 5 10-5ZM6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5',
    },
    {
      phase:       'Service',
      title:       'Government veterinarian',
      description: 'Years of field & clinical service across Uttarakhand\'s animal-health system.',
      iconBg:      '#EAF3E2',
      iconStroke:  '#3C7A1E',
      iconPath:    'M3 21h18M5 21V7l8-4 8 4v14M9 9h.01M9 13h.01M9 17h.01M15 9h.01M15 13h.01M15 17h.01',
    },
    {
      phase:       'Leadership',
      title:       'Director, AH Dept.',
      description: 'Led the state\'s Animal Husbandry Department — policy, disease control & welfare.',
      iconBg:      '#F4EAD9',
      iconStroke:  '#B0822E',
      iconPath:    'm12 2 2.4 7.4H22l-6 4.6 2.3 7.4-6.3-4.6L5.7 21 8 14 2 9.4h7.6L12 2Z',
    },
    {
      phase:       'Today',
      title:       'His own hospital',
      description: 'Founded his hospital & path lab in Muzaffarnagar; volunteers with welfare NGOs.',
      iconBg:      '#FCEBEA',
      iconStroke:  '#C0392B',
      iconPath:    'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z',
    },
  ],

  // Gallery
  galleryLabel:   'In practice',
  galleryHeading: 'Moments from the clinic',
  galleryNote:    'More photos coming soon.',
} as const

// ─── Component ───────────────────────────────────────────────────────────────

function CheckIcon({ stroke = '#4C9A2A' }: { stroke?: string }) {
  return (
    <svg
      width="20" height="20" viewBox="0 0 24 24"
      fill="none" stroke={stroke} strokeWidth="2.2"
      className="flex-shrink-0 mt-[1px]"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export function AboutDetail() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="about-hero-heading"
        style={{ background: 'linear-gradient(170deg,#16335A,#0E2746)' }}
        className="text-white"
      >
        <div className="max-w-container mx-auto px-10 py-16 grid grid-cols-1 lg:grid-cols-[1fr_0.7fr] gap-[54px] items-center">
          <div>
            <p className="font-sans text-[13px] font-bold tracking-[2px] uppercase text-accent-muted mb-4">
              {COPY.sectionLabel}
            </p>
            <h1
              id="about-hero-heading"
              className="font-display font-[500] text-[54px] text-white leading-[1.08] tracking-[-0.8px] mb-5"
            >
              {COPY.heroHeading}
            </h1>
            <p className="font-sans text-[17px] text-[#A9BBD6] leading-[1.8] max-w-[520px] mb-7">
              {COPY.heroBody}
            </p>
            <div className="flex gap-[10px] flex-wrap">
              {COPY.credentials.map(({ label, style }) => (
                <span
                  key={label}
                  className="font-sans text-[13px] font-semibold px-[15px] py-2 rounded-full"
                  style={
                    style === 'green'
                      ? { background: 'rgba(127,176,78,0.15)', border: '1px solid rgba(127,176,78,0.35)', color: '#B6D996' }
                      : { background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.18)', color: '#C7D6EC' }
                  }
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Photo card with stats */}
          <div
            className="rounded-[20px] p-[14px]"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.14)' }}
          >
            <div className="relative w-full h-[360px] rounded-[13px] overflow-hidden">
              <Image
                src="/images/prem.jpeg"
                alt={COPY.photoAlt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 420px"
                priority
              />
            </div>
            <div className="flex items-center justify-around pt-4 pb-2">
              <div className="text-center">
                <div className="font-display text-[26px] font-semibold text-white">{COPY.stat1.value}</div>
                <div className="font-sans text-[11px] text-[#8CA3C6] font-semibold tracking-wide">{COPY.stat1.label}</div>
              </div>
              <div className="w-px h-[30px]" style={{ background: 'rgba(255,255,255,0.15)' }} aria-hidden="true" />
              <div className="text-center">
                <div className="font-display text-[26px] font-semibold text-white">{COPY.stat2.value}</div>
                <div className="font-sans text-[11px] text-[#8CA3C6] font-semibold tracking-wide">{COPY.stat2.label}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bio + sticky credentials ─────────────────────────────────── */}
      <section aria-labelledby="bio-heading" className="bg-cream">
        <div className="max-w-container mx-auto px-10 py-[72px] grid grid-cols-1 lg:grid-cols-[1.4fr_0.6fr] gap-[60px] items-start">

          {/* Bio text */}
          <div>
            <h2
              id="bio-heading"
              className="font-display font-[500] text-[34px] text-primary tracking-[-0.5px] mb-6"
            >
              {COPY.bioHeading}
            </h2>
            <p className="font-sans text-[16.5px] text-[#4A5260] leading-[1.9] mb-5">
              Dr. Prem Kumar began his journey with a Bachelor&apos;s in Veterinary Science &amp; Animal Husbandry, followed by a Master&apos;s in{' '}
              <strong className="text-primary">Veterinary Pathology</strong> — the science of understanding disease through laboratory diagnosis. It is a foundation that still shapes how he practices today: look closely, test carefully, treat precisely.
            </p>
            <p className="font-sans text-[16.5px] text-[#4A5260] leading-[1.9] mb-5">
              Over a distinguished career in government service, he rose to become{' '}
              <strong className="text-primary">Director of the Animal Husbandry Department, Uttarakhand</strong> — leading veterinary services, disease-control programmes and livestock welfare across the state. That work took him from modern laboratories to remote villages, treating everything from dairy herds to household pets.
            </p>
            <p className="font-sans text-[16.5px] text-[#4A5260] leading-[1.9] mb-8">
              After retirement, rather than slow down, he opened{' '}
              <strong className="text-primary">Dr. Prem&apos;s Animal Hospital &amp; Pathology Lab</strong> in Muzaffarnagar — bringing genuine diagnostic capability and decades of judgement to his home community. He continues to volunteer with animal-welfare non-profits, because he believes good care should never depend on whether an animal&apos;s owner can afford the best.
            </p>

            {/* Pull quote */}
            <blockquote className="bg-cream-2 border border-[#ECE2D0] rounded-2xl px-[30px] py-7 mt-2">
              <p className="font-display italic text-[22px] text-primary leading-[1.6]">
                {COPY.quote}
              </p>
              <footer className="font-sans text-[14px] text-tan font-bold mt-[14px]">
                {COPY.quoteAuthor}
              </footer>
            </blockquote>
          </div>

          {/* Sticky credentials card */}
          <aside
            aria-label="Areas of expertise"
            className="bg-white border border-[#EFE7D7] rounded-[18px] p-[30px] shadow-card lg:sticky lg:top-24"
          >
            <p className="font-sans text-[12px] font-bold tracking-[1.5px] uppercase text-accent mb-[18px]">
              {COPY.expertiseLabel}
            </p>
            <ul role="list" className="flex flex-col gap-[15px]">
              {COPY.expertise.map(({ title, desc }) => (
                <li key={title} className="flex gap-3 items-start">
                  <CheckIcon />
                  <div>
                    <div className="font-sans text-[15px] font-bold text-primary">{title}</div>
                    <div className="font-sans text-[13px] text-muted leading-[1.5]">{desc}</div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="h-px bg-[#EEE6D6] my-[22px]" aria-hidden="true" />
            <Link
              href="/book"
              className="block w-full text-center bg-accent hover:bg-accent-dark text-white font-sans font-bold text-[15px] py-[13px] rounded-[11px] motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              {COPY.bookCTA}
            </Link>
          </aside>
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────────────────────────── */}
      <section
        aria-labelledby="timeline-heading"
        className="bg-cream-2 border-t border-[#ECE2D0] border-b"
      >
        <div className="max-w-container mx-auto px-10 py-[68px]">
          <div className="text-center mb-12">
            <p className="font-sans text-[13px] font-bold tracking-[2px] uppercase text-accent mb-[10px]">
              {COPY.timelineLabel}
            </p>
            <h2
              id="timeline-heading"
              className="font-display font-[500] text-[36px] text-primary tracking-[-0.5px]"
            >
              {COPY.timelineHeading}
            </h2>
          </div>
          <ol
            role="list"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {COPY.timeline.map(({ phase, title, description, iconBg, iconStroke, iconPath }) => (
              <li
                key={phase}
                className="bg-white border border-[#EBE1CF] rounded-2xl p-[26px]"
              >
                <div
                  className="w-[42px] h-[42px] rounded-[11px] flex items-center justify-center mb-4"
                  style={{ background: iconBg }}
                  aria-hidden="true"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={iconStroke} strokeWidth="1.8">
                    <path d={iconPath} />
                  </svg>
                </div>
                <p className="font-sans text-[12px] font-bold text-tan tracking-[1px] uppercase mb-[7px]">
                  {phase}
                </p>
                <h3 className="font-display text-[18px] font-semibold text-primary mb-[7px]">
                  {title}
                </h3>
                <p className="font-sans text-[13.5px] text-muted leading-[1.6]">
                  {description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Gallery placeholder ───────────────────────────────────────── */}
      <section aria-labelledby="gallery-heading" className="bg-cream">
        <div className="max-w-container mx-auto px-10 py-[72px]">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-3">
            <div>
              <p className="font-sans text-[13px] font-bold tracking-[2px] uppercase text-accent mb-[10px]">
                {COPY.galleryLabel}
              </p>
              <h2
                id="gallery-heading"
                className="font-display font-[500] text-[34px] text-primary tracking-[-0.5px]"
              >
                {COPY.galleryHeading}
              </h2>
            </div>
            <p className="font-sans text-[13.5px] text-tan max-w-[300px] leading-[1.6]">
              {COPY.galleryNote}
            </p>
          </div>

          {/* Grid: 1 tall left + 2×2 right */}
          <div className="grid grid-cols-3 grid-rows-2 gap-4" style={{ height: '416px' }}>
            <div
              className="row-span-2 rounded-2xl overflow-hidden bg-[#E7EEF7] flex items-center justify-center"
              aria-label="Doctor photo placeholder"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/prem.jpeg"
                  alt={COPY.photoAlt}
                  fill
                  className="object-cover object-top"
                  sizes="33vw"
                />
              </div>
            </div>
            {['Clinic / lab photo', 'With a patient', 'Award / event photo', 'Farm visit photo'].map(label => (
              <div
                key={label}
                className="rounded-2xl bg-[#EAF3E2] flex items-center justify-center"
                aria-label={label}
              >
                <span className="font-sans text-[13px] text-accent-dark font-medium px-4 text-center">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
