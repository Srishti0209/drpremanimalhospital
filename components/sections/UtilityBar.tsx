const COPY = {
  location: 'Khanjanpur, Muzaffarnagar, UP',
  hours:    'Mon–Sat: 9am–2pm & 4pm–5pm',
  phone:    '7895881063',
  cta:      'Call / WhatsApp:',
} as const

export function UtilityBar() {
  return (
    <div
      aria-label="Clinic contact information"
      className="bg-primary font-sans text-[12.5px] px-10 py-2 flex items-center justify-between"
    >
      {/* Left — location + hours */}
      <div className="flex items-center gap-[22px] text-[#C7D6EC]">
        <span className="flex items-center gap-1.5">
          <svg
            width="13" height="13" viewBox="0 0 24 24"
            fill="none" stroke="#7FB04E" strokeWidth="2.2"
            aria-hidden="true"
          >
            <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {COPY.location}
        </span>
        <span className="opacity-60">·</span>
        <span className="whitespace-nowrap">{COPY.hours}</span>
      </div>

      {/* Right — phone */}
      <div className="flex items-center gap-2 font-semibold text-white">
        <svg
          width="13" height="13" viewBox="0 0 24 24"
          fill="none" stroke="#7FB04E" strokeWidth="2.2"
          aria-hidden="true"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.2 12.83 19.79 19.79 0 0 1 1.13 4.16 2 2 0 0 1 3.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
        </svg>
        <a
          href={`tel:+91${COPY.phone}`}
          className="hover:text-accent-muted motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded-sm"
        >
          {COPY.cta} {COPY.phone}
        </a>
      </div>
    </div>
  )
}
