import Link from 'next/link'

const COPY = {
  heading:    'Two easy ways to consult',
  subheading: 'Choose what works for you — talk to the doctor from home over a WhatsApp video call, or visit the clinic in person.',
  online: {
    title:       'Online consultation',
    description: 'Pick a date & time, and consult Dr. Prem over a WhatsApp video call from anywhere.',
    cta:         'Book online',
  },
  clinic: {
    title:       'Visit the clinic',
    description: 'Reserve an in-person slot, or simply call / WhatsApp us and walk in during clinic hours.',
    cta:         'Book a visit',
  },
} as const

export function BookingCTA() {
  return (
    <section
      aria-labelledby="booking-cta-heading"
      className="bg-cream-2 border-t border-[#ECE2D0] border-b"
    >
      <div className="max-w-container mx-auto px-10 py-[64px] text-center">
        <h2
          id="booking-cta-heading"
          className="font-display font-[500] text-[38px] text-primary tracking-[-0.5px] mb-3"
        >
          {COPY.heading}
        </h2>
        <p className="font-sans text-[16px] text-muted mb-[40px] max-w-[520px] mx-auto leading-[1.7]">
          {COPY.subheading}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px] max-w-[780px] mx-auto">

          {/* Online */}
          <Link
            href="/book?type=online"
            className="group bg-white border border-[#E7DCC8] hover:border-accent rounded-[18px] p-[32px_28px] text-left shadow-card motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            <div
              className="w-[54px] h-[54px] rounded-[14px] bg-accent-light flex items-center justify-center mb-[18px]"
              aria-hidden="true"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3C7A1E" strokeWidth="1.8">
                <path d="m23 7-7 5 7 5V7Z" />
                <rect x="1" y="5" width="15" height="14" rx="2" />
              </svg>
            </div>
            <div className="font-display text-[23px] font-semibold text-primary mb-[7px]">{COPY.online.title}</div>
            <div className="font-sans text-[14.5px] text-muted leading-[1.6] mb-4">{COPY.online.description}</div>
            <span className="inline-flex items-center gap-2 font-sans text-[14.5px] font-bold text-accent-dark">
              {COPY.online.cta}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3C7A1E" strokeWidth="2.4" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </Link>

          {/* Clinic */}
          <Link
            href="/book?type=clinic"
            className="group bg-white border border-[#E7DCC8] hover:border-primary rounded-[18px] p-[32px_28px] text-left shadow-card motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <div
              className="w-[54px] h-[54px] rounded-[14px] bg-[#E7EEF7] flex items-center justify-center mb-[18px]"
              aria-hidden="true"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1E4E8C" strokeWidth="1.8">
                <path d="M3 21V8l9-5 9 5v13M3 21h18M9 21v-6h6v6" />
              </svg>
            </div>
            <div className="font-display text-[23px] font-semibold text-primary mb-[7px]">{COPY.clinic.title}</div>
            <div className="font-sans text-[14.5px] text-muted leading-[1.6] mb-4">{COPY.clinic.description}</div>
            <span className="inline-flex items-center gap-2 font-sans text-[14.5px] font-bold text-primary">
              {COPY.clinic.cta}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16335A" strokeWidth="2.4" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </Link>

        </div>
      </div>
    </section>
  )
}
