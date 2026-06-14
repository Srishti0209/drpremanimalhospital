import Image from 'next/image'
import Link from 'next/link'

const COPY = {
  badge:    "Muzaffarnagar's most trusted animal care",
  titlePre: 'Four decades of care, for every animal you ',
  titleItalicWord: 'love',
  titleEnd: '.',
  subtitle: 'Advanced on-site pathology lab, expert consultations, vaccinations and complete care — led by Dr. Prem Kumar, retired Director of Animal Husbandry, Uttarakhand.',
  bookCTA:  'Book an appointment',
  whatsapp: 'WhatsApp us',
  phone:    '7895881063',

  stat1Value: '40+',
  stat1Label: 'Years of expertise',
  stat2Value: 'On-site',
  stat2Label: 'Pathology lab',
  stat3Value: '4 species',
  stat3Label: 'Cattle · Dog · Cat · Poultry',

  doctorName:  'Dr. Prem Kumar',
  credentials: 'B.V.Sc & A.H. · M.V.Sc Veterinary Pathology',
  badge1:      'Retd. Director, AH Dept.',
  badge2:      'Animal welfare NGOs',
  photoAlt:    'Dr. Prem Kumar, veterinarian with 40 years of experience',
} as const

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="bg-cream"
    >
      <div className="max-w-container mx-auto px-10 pt-16 pb-14 grid grid-cols-1 md:grid-cols-[1.12fr_0.88fr] gap-[54px] items-center">

        {/* ── Left: Content ── */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/25 text-accent-dark font-sans text-[13px] font-bold px-[15px] py-[7px] rounded-full mb-[26px]">
            <span aria-hidden="true" className="w-[7px] h-[7px] rounded-full bg-accent flex-shrink-0" />
            {COPY.badge}
          </div>

          {/* H1 */}
          <h1
            id="hero-heading"
            className="font-display font-[500] text-[56px] leading-[1.1] text-primary tracking-[-0.8px] mb-[22px]"
          >
            {COPY.titlePre}
            <em className="italic text-accent not-italic" style={{ fontStyle: 'italic' }}>
              {COPY.titleItalicWord}
            </em>
            {COPY.titleEnd}
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-[17px] leading-[1.75] text-[#5C5648] max-w-[460px] mb-[34px]">
            {COPY.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex gap-[14px] mb-[40px] flex-wrap">
            <Link
              href="/book"
              className="bg-accent hover:bg-accent-dark text-white font-sans font-bold text-[15.5px] px-[30px] py-[16px] rounded-[11px] shadow-book motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              {COPY.bookCTA}
            </Link>
            <a
              href={`https://wa.me/91${COPY.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${COPY.whatsapp} (opens in new tab)`}
              className="inline-flex items-center gap-[10px] bg-white border border-[#E2D9C8] hover:border-[#25D366] text-primary font-sans font-bold text-[15.5px] px-[26px] py-[16px] rounded-[11px] motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
            >
              <svg
                width="19" height="19" viewBox="0 0 24 24"
                fill="#25D366"
                aria-hidden="true"
              >
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              {COPY.whatsapp}
            </a>
          </div>

          {/* Mini stats */}
          <div className="flex gap-[30px] flex-wrap">
            <div>
              <div className="font-display text-[32px] font-semibold text-primary">{COPY.stat1Value}</div>
              <div className="font-sans text-[13px] text-tan font-semibold">{COPY.stat1Label}</div>
            </div>
            <div className="w-px bg-[#E6DCC9]" aria-hidden="true" />
            <div>
              <div className="font-display text-[32px] font-semibold text-primary">{COPY.stat2Value}</div>
              <div className="font-sans text-[13px] text-tan font-semibold">{COPY.stat2Label}</div>
            </div>
            <div className="w-px bg-[#E6DCC9]" aria-hidden="true" />
            <div>
              <div className="font-display text-[32px] font-semibold text-primary">{COPY.stat3Value}</div>
              <div className="font-sans text-[13px] text-tan font-semibold">{COPY.stat3Label}</div>
            </div>
          </div>
        </div>

        {/* ── Right: Doctor photo card ── */}
        <div className="relative">
          {/* Shadow box behind card */}
          <div
            aria-hidden="true"
            className="absolute inset-[18px_-14px_-14px_18px] bg-primary rounded-[22px] opacity-[0.08]"
          />
          {/* White card */}
          <div className="relative bg-white rounded-[20px] p-[14px] shadow-hero border border-[#F0E9DA]">
            <div className="relative w-full h-[370px] rounded-[13px] overflow-hidden">
              <Image
                src="/images/prem.jpeg"
                alt={COPY.photoAlt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 480px"
                priority
              />
            </div>
            {/* Caption */}
            <div className="pt-[17px] pb-2 px-2">
              <div className="font-display text-[21px] font-semibold text-primary">{COPY.doctorName}</div>
              <div className="font-sans text-[13px] text-tan font-semibold mt-[2px]">{COPY.credentials}</div>
              <div className="flex gap-2 mt-[14px] flex-wrap">
                <span className="bg-cream-2 text-accent-dark font-sans text-[11.5px] font-bold px-3 py-1.5 rounded-[8px]">
                  ★ {COPY.badge1}
                </span>
                <span className="bg-cream-2 text-primary font-sans text-[11.5px] font-bold px-3 py-1.5 rounded-[8px]">
                  {COPY.badge2}
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
