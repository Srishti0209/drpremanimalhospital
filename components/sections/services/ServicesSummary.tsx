import Link from 'next/link'

const COPY = {
  sectionLabel: 'What we offer',
  heading:      'Complete care, under one roof',
  subheading:   'From a real diagnostic pathology lab to grooming and farm visits — everything your animal needs, delivered with four decades of expertise.',
  cta:          'Explore all services & our path lab',
} as const

interface ServiceItem {
  iconBg:    string
  iconStroke: string
  iconPath:  string
  title:     string
  description: string
}

const SERVICES: ServiceItem[] = [
  {
    iconBg:     '#EAF3E2',
    iconStroke: '#3C7A1E',
    iconPath:   'M9 3h6M10 3v6.5L5.2 17a2 2 0 0 0 1.7 3h10.2a2 2 0 0 0 1.7-3L14 9.5V3M7.5 14h9',
    title:       'Pathology Lab & Diagnostics',
    description: 'On-site blood, urine, stool & biochemistry testing on modern machines — accurate results, often same day.',
  },
  {
    iconBg:     '#E7EEF7',
    iconStroke: '#1E4E8C',
    iconPath:   'M4.8 2.3v5.5a4.2 4.2 0 0 0 8.4 0V2.3M3 2.3h3.6M11.4 2.3H15M9 12v3.2a4.5 4.5 0 0 0 9 0V14M18 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0z',
    title:       'Medical Consultation',
    description: 'Expert diagnosis & treatment by Dr. Prem Kumar, in person at the clinic or online over a WhatsApp video call.',
  },
  {
    iconBg:     '#EAF3E2',
    iconStroke: '#3C7A1E',
    iconPath:   'm18 2 4 4M17 3l4 4-9.5 9.5-4.5 1 1-4.5L17 3ZM13 7l-7.5 7.5a2.1 2.1 0 0 0 3 3L16 10',
    title:       'Vaccinations',
    description: 'Complete vaccination schedules for dogs, cats, cattle & poultry — prevention guided by an expert.',
  },
  {
    iconBg:     '#E7EEF7',
    iconStroke: '#1E4E8C',
    iconPath:   'M12 2s7 3 7 9a7 7 0 0 1-14 0c0-6 7-9 7-9ZM9.5 12.5 11 14l3.5-3.5',
    title:       'Deworming & Parasite Control',
    description: 'Scheduled deworming and treatment for ticks, fleas, mange & internal parasites to keep animals healthy.',
  },
  {
    iconBg:     '#FCEBEA',
    iconStroke: '#C0392B',
    iconPath:   'M22 12h-4l-3 8L9 4l-3 8H2',
    title:       'Emergency & Critical Care',
    description: 'Urgent attention for accidents, poisoning, difficult births & sudden illness — call ahead and come in.',
  },
  {
    iconBg:     '#EAF3E2',
    iconStroke: '#3C7A1E',
    iconPath:   'M10 17h4V5H2v12h3M15 17h6v-5l-3-3h-3M5.5 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm9 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z',
    title:       'Farm & Field Visits',
    description: 'On-site herd health, treatment & advice for dairy farmers — we come to your cattle when needed.',
  },
]

export function ServicesSummary() {
  return (
    <section
      aria-labelledby="services-heading"
      className="bg-cream"
    >
      <div className="max-w-container mx-auto px-10 pt-[72px] pb-5">

        {/* Header */}
        <div className="text-center mb-[46px]">
          <p className="font-sans text-[13px] font-bold tracking-[2px] uppercase text-accent mb-[10px]">
            {COPY.sectionLabel}
          </p>
          <h2
            id="services-heading"
            className="font-display font-[500] text-[40px] text-primary tracking-[-0.5px]"
          >
            {COPY.heading}
          </h2>
          <p className="font-sans text-[16px] text-muted mt-3 max-w-[540px] mx-auto leading-[1.7]">
            {COPY.subheading}
          </p>
        </div>

        {/* 3-col, 6 services */}
        <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">
          {SERVICES.map(({ iconBg, iconStroke, iconPath, title, description }) => (
            <li
              key={title}
              className="bg-white border border-[#EFE7D7] rounded-2xl p-[26px] shadow-card hover:border-[#CFE0BC] motion-safe:transition-colors"
            >
              {/* Icon */}
              <div
                style={{ background: iconBg }}
                className="w-[50px] h-[50px] rounded-[13px] flex items-center justify-center mb-[18px]"
                aria-hidden="true"
              >
                <svg
                  width="24" height="24" viewBox="0 0 24 24"
                  fill="none"
                  stroke={iconStroke}
                  strokeWidth="1.8"
                >
                  <path d={iconPath} />
                </svg>
              </div>
              <h3 className="font-display text-[21px] font-semibold text-primary mb-2">
                {title}
              </h3>
              <p className="font-sans text-[14px] text-muted leading-[1.65]">
                {description}
              </p>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="text-center mt-[38px] pb-[20px]">
          <Link
            href="/services"
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
