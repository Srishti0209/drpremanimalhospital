import Link from 'next/link'

// ─── Copy ────────────────────────────────────────────────────────────────────

const COPY = {
  // Hero
  sectionLabel: 'Our services',
  heroHeading:  'Everything your animal needs,\nin one trusted place',
  heroBody:     'Backed by a real on-site pathology lab and four decades of experience — for cattle, pets and poultry alike.',

  // Services grid
  servicesHeading: 'What we treat & how we help',

  // Path lab deep dive
  labBadge:   'On-site pathology lab',
  labHeading: 'Diagnosis you can\ntrust — same day',
  labBody:    'Most veterinary clinics send samples away and wait days. We run the tests here, ourselves — combining modern laboratory machines with Dr. Prem\'s specialist training in veterinary pathology.',

  labStats: [
    { value: 'Same day', desc: 'Results for most routine tests' },
    { value: 'All species', desc: 'Cattle, dogs, cats & poultry' },
    { value: 'Specialist', desc: 'M.V.Sc Veterinary Pathology' },
    { value: 'On-site', desc: 'No outside-lab delays' },
  ],

  testMenuHeading: 'Our test menu',
  testMenuSub:     'A representative list — ask us about any specific test you need.',

  // Animals
  animalsLabel:   'Who we see',
  animalsHeading: 'All animals welcome',
} as const

// ─── Services data ─────────────────────────────────────────────────────────

interface ServiceItem {
  id:          string
  iconBg:      string
  iconStroke:  string
  iconPath:    string
  title:       string
  description: string
}

const SERVICES: ServiceItem[] = [
  {
    id:          'path-lab',
    iconBg:      '#EAF3E2',
    iconStroke:  '#3C7A1E',
    iconPath:    'M9 3h6M10 3v6.5L5.2 17a2 2 0 0 0 1.7 3h10.2a2 2 0 0 0 1.7-3L14 9.5V3M7.5 14h9',
    title:       'Pathology Lab & Diagnostics',
    description: 'A complete in-house laboratory — haematology, biochemistry, urine, stool and dairy testing on modern analysers. Accurate results, often within the same visit, so treatment never has to wait.',
  },
  {
    id:          'consultation',
    iconBg:      '#E7EEF7',
    iconStroke:  '#1E4E8C',
    iconPath:    'M4.8 2.3v5.5a4.2 4.2 0 0 0 8.4 0V2.3M3 2.3h3.6M11.4 2.3H15M9 12v3.2a4.5 4.5 0 0 0 9 0V14M18 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0z',
    title:       'Medical Consultation',
    description: 'Thorough examination, diagnosis and treatment planning by Dr. Prem Kumar — in person at the clinic or via a WhatsApp video call for follow-ups and minor concerns.',
  },
  {
    id:          'vaccination',
    iconBg:      '#EAF3E2',
    iconStroke:  '#3C7A1E',
    iconPath:    'm18 2 4 4M17 3l4 4-9.5 9.5-4.5 1 1-4.5L17 3ZM13 7l-7.5 7.5a2.1 2.1 0 0 0 3 3L16 10',
    title:       'Vaccinations',
    description: 'Complete vaccination schedules for dogs, cats, cattle & poultry — Dr. Prem advises on timing and product based on your animal\'s age, species and local disease risk.',
  },
  {
    id:          'deworming',
    iconBg:      '#E7EEF7',
    iconStroke:  '#1E4E8C',
    iconPath:    'M12 2s7 3 7 9a7 7 0 0 1-14 0c0-6 7-9 7-9ZM9.5 12.5 11 14l3.5-3.5',
    title:       'Deworming & Parasite Control',
    description: 'Routine deworming plus treatment for ticks, fleas, lice and mange — guided by stool testing to target the right parasite at the right dose.',
  },
  {
    id:          'emergency',
    iconBg:      '#FCEBEA',
    iconStroke:  '#C0392B',
    iconPath:    'M22 12h-4l-3 8L9 4l-3 8H2',
    title:       'Emergency & Critical Care',
    description: 'Urgent help for accidents, poisoning, bloat, difficult calving and sudden illness. Call ahead on 7895881063 and bring your animal straight in.',
  },
  {
    id:          'farm-visits',
    iconBg:      '#EAF3E2',
    iconStroke:  '#3C7A1E',
    iconPath:    'M10 17h4V5H2v12h3M15 17h6v-5l-3-3h-3M5.5 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm9 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z',
    title:       'Farm & Field Visits',
    description: 'On-site herd health checks, treatment and advice for dairy farmers — when your cattle can\'t come to the clinic, the doctor comes to your farm.',
  },
  {
    id:          'grooming',
    iconBg:      '#E7EEF7',
    iconStroke:  '#1E4E8C',
    iconPath:    'M6 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM20 4 8.12 15.88M14.47 14.48 20 20M8.12 8.12 12 12',
    title:       'Pet Grooming & Wellness',
    description: 'Bathing, coat care, nail trimming and skin checks for dogs and cats — keeping pets clean, comfortable and catching skin problems early.',
  },
  {
    id:          'feed',
    iconBg:      '#F4EAD9',
    iconStroke:  '#B0822E',
    iconPath:    'M3 8h18l-1.5 12.5a1 1 0 0 1-1 .9H5.5a1 1 0 0 1-1-.9L3 8ZM8 8V6a4 4 0 0 1 8 0v2',
    title:       'Feed, Supplements & Tonics',
    description: 'Quality animal feed, mineral mixtures, calcium, vitamins and veterinary tonics — recommended to suit your animal\'s age, species and condition.',
  },
]

// ─── Path lab test menu data ───────────────────────────────────────────────

interface TestCategory {
  iconBg:     string
  iconStroke: string
  iconPath:   string
  title:      string
  tests:      string[]
}

const TEST_CATEGORIES: TestCategory[] = [
  {
    iconBg:     '#FCEBEA',
    iconStroke: '#C0392B',
    iconPath:   'M12 2s6 6.5 6 11a6 6 0 0 1-12 0C6 8.5 12 2 12 2Z',
    title:      'Haematology',
    tests:      ['Complete Blood Count (CBC)', 'Haemoglobin & PCV', 'Blood smear for parasites', 'Differential WBC count'],
  },
  {
    iconBg:     '#E7EEF7',
    iconStroke: '#1E4E8C',
    iconPath:   'M9 3h6M10 3v6L6 16a2 2 0 0 0 1.7 3h8.6a2 2 0 0 0 1.7-3L14 9V3',
    title:      'Biochemistry',
    tests:      ['Liver function (SGOT/SGPT)', 'Kidney function (urea, creatinine)', 'Blood glucose', 'Calcium & phosphorus'],
  },
  {
    iconBg:     '#EAF3E2',
    iconStroke: '#3C7A1E',
    iconPath:   'M11 11a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm10 10-4.3-4.3',
    title:      'Parasitology',
    tests:      ['Stool exam for worms & ova', 'Skin scraping for mange/mites', 'Blood parasite screening', 'Tick-borne disease checks'],
  },
  {
    iconBg:     '#F4EAD9',
    iconStroke: '#B0822E',
    iconPath:   'M8 2h8M9 2v4l-3 5a3 3 0 0 0 2.7 4.4h4.6A3 3 0 0 0 18 11l-3-5V2',
    title:      'Urine Analysis',
    tests:      ['Routine & microscopic exam', 'Protein, glucose & ketones', 'Crystals & sediment', 'Kidney & bladder health'],
  },
  {
    iconBg:     '#EAF3E2',
    iconStroke: '#3C7A1E',
    iconPath:   'M9 3h6M10 3v6.5L5.2 17a2 2 0 0 0 1.7 3h10.2a2 2 0 0 0 1.7-3L14 9.5V3M7.5 14h9',
    title:      'Dairy Testing',
    tests:      ['Mastitis screening (CMT)', 'Milk quality checks', 'Somatic cell count', 'Bacterial culture (on referral)'],
  },
  {
    iconBg:     '#FCEBEA',
    iconStroke: '#C0392B',
    iconPath:   'M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3ZM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
    title:      'Cytology & Other',
    tests:      ['Fine needle aspirate', 'Skin impression smear', 'Ear swab cytology', 'Semen evaluation'],
  },
]

const ANIMALS = [
  { emoji: '🐄', label: 'Cow & Buffalo' },
  { emoji: '🐕', label: 'Dog' },
  { emoji: '🐈', label: 'Cat' },
  { emoji: '🐓', label: 'Poultry' },
  { emoji: '🐑', label: 'Goat & Sheep' },
  { emoji: '🐾', label: 'Others' },
] as const

// ─── Component ───────────────────────────────────────────────────────────────

export function ServicesDetail() {
  return (
    <>
      {/* ── Page hero ────────────────────────────────────────────────── */}
      <section aria-labelledby="services-hero-heading" className="bg-cream">
        <div className="max-w-container mx-auto px-10 pt-[60px] pb-4 text-center">
          <p className="font-sans text-[13px] font-bold tracking-[2px] uppercase text-accent mb-3">
            {COPY.sectionLabel}
          </p>
          <h1
            id="services-hero-heading"
            className="font-display font-[500] text-[48px] text-primary tracking-[-0.7px] leading-[1.1] mb-[18px] whitespace-pre-line"
          >
            {COPY.heroHeading}
          </h1>
          <p className="font-sans text-[17px] text-muted leading-[1.75] max-w-[600px] mx-auto">
            {COPY.heroBody}
          </p>
        </div>
      </section>

      {/* ── Services grid (2-col horizontal cards) ───────────────────── */}
      <section aria-labelledby="services-grid-heading" className="bg-cream">
        <div className="max-w-container mx-auto px-10 pt-12 pb-2">
          <h2 id="services-grid-heading" className="sr-only">{COPY.servicesHeading}</h2>
          <ul role="list" className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SERVICES.map(({ id, iconBg, iconStroke, iconPath, title, description }) => (
              <li
                key={id}
                id={id}
                className="bg-white border border-[#EFE7D7] rounded-[18px] p-[30px] flex gap-5 shadow-card"
              >
                <div
                  className="w-[56px] h-[56px] flex-shrink-0 rounded-[14px] flex items-center justify-center"
                  style={{ background: iconBg }}
                  aria-hidden="true"
                >
                  <svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke={iconStroke} strokeWidth="1.8">
                    <path d={iconPath} />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-[22px] font-semibold text-primary mb-2">{title}</h3>
                  <p className="font-sans text-[14.5px] text-muted leading-[1.7]">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Path lab deep dive ────────────────────────────────────────── */}
      <section
        id="path-lab"
        aria-labelledby="pathlab-deep-heading"
        className="mt-16"
        style={{ background: 'linear-gradient(180deg,#16335A,#0E2746)', color: '#fff' }}
      >
        <div className="max-w-container mx-auto px-10 py-[68px]">

          {/* Top: text + stats */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
            <div>
              <div
                className="inline-flex items-center gap-2 font-sans text-[12.5px] font-bold tracking-[1px] uppercase px-[15px] py-[7px] rounded-full mb-[18px]"
                style={{ background: 'rgba(127,176,78,0.16)', border: '1px solid rgba(127,176,78,0.35)', color: '#B6D996' }}
              >
                {COPY.labBadge}
              </div>
              <h2
                id="pathlab-deep-heading"
                className="font-display font-[500] text-[40px] text-white leading-[1.12] tracking-[-0.5px] mb-[18px] whitespace-pre-line"
              >
                {COPY.labHeading}
              </h2>
              <p className="font-sans text-[16px] text-[#A9BBD6] leading-[1.8] max-w-[460px]">
                {COPY.labBody}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-[14px]">
              {COPY.labStats.map(({ value, desc }) => (
                <div
                  key={value}
                  className="rounded-[14px] p-5"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
                >
                  <div className="font-display text-[28px] font-semibold text-accent-muted">{value}</div>
                  <div className="font-sans text-[13px] text-[#9DB0CE] mt-1">{desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Test menu */}
          <div className="bg-cream rounded-[22px] p-10">
            <div className="text-center mb-[34px]">
              <h3 className="font-display font-[500] text-[30px] text-primary">{COPY.testMenuHeading}</h3>
              <p className="font-sans text-[14.5px] text-muted mt-2">{COPY.testMenuSub}</p>
            </div>
            <ul role="list" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
              {TEST_CATEGORIES.map(({ iconBg, iconStroke, iconPath, title, tests }) => (
                <li
                  key={title}
                  className="bg-white border border-[#EFE7D7] rounded-2xl p-6"
                >
                  <div className="flex items-center gap-[11px] mb-4">
                    <div
                      className="w-10 h-10 rounded-[10px] flex items-center justify-center flex-shrink-0"
                      style={{ background: iconBg }}
                      aria-hidden="true"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={iconStroke} strokeWidth="1.8">
                        <path d={iconPath} />
                      </svg>
                    </div>
                    <h4 className="font-display text-[18px] font-semibold text-primary">{title}</h4>
                  </div>
                  <ul role="list" className="flex flex-col gap-[9px]">
                    {tests.map(test => (
                      <li key={test} className="font-sans text-[13.5px] text-[#4A5260] flex gap-2">
                        <span className="text-accent font-bold" aria-hidden="true">·</span>
                        {test}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Animals we treat ─────────────────────────────────────────── */}
      <section aria-labelledby="animals-heading" className="bg-cream-2 border-t border-[#ECE2D0]">
        <div className="max-w-container mx-auto px-10 py-16 text-center">
          <p className="font-sans text-[13px] font-bold tracking-[2px] uppercase text-accent mb-3">
            {COPY.animalsLabel}
          </p>
          <h2
            id="animals-heading"
            className="font-display font-[500] text-[36px] text-primary tracking-[-0.5px] mb-10"
          >
            {COPY.animalsHeading}
          </h2>
          <ul
            role="list"
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {ANIMALS.map(({ emoji, label }) => (
              <li
                key={label}
                className="bg-white border border-[#EFE7D7] rounded-[14px] px-6 py-4 flex items-center gap-3 shadow-card"
              >
                <span className="text-[28px]" aria-hidden="true">{emoji}</span>
                <span className="font-sans text-[15px] font-semibold text-primary">{label}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-sans font-bold text-[15.5px] px-8 py-4 rounded-[11px] shadow-book motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              Book an appointment
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.4" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
