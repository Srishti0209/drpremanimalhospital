import Link from 'next/link'

const COPY = {
  label:       'Our flagship',
  heading:     'A real pathology lab,\nright inside the clinic',
  body:        'No waiting days for an outside lab. We run haematology, biochemistry, urine, stool and milk tests on-site — so diagnosis and treatment can begin the same visit.',
  cta:         'See the full test menu',
} as const

const TESTS = [
  { title: 'Haematology',  desc: 'CBC, haemoglobin, blood smear for parasites' },
  { title: 'Biochemistry', desc: 'Liver, kidney, glucose, calcium panels' },
  { title: 'Urine & Stool',desc: 'Faecal exam for worms & ova, urinalysis' },
  { title: 'Dairy Testing', desc: 'Mastitis screening & milk quality checks' },
] as const

export function PathLabBand() {
  return (
    <section
      aria-labelledby="pathlab-heading"
      className="max-w-container mx-auto px-10 mt-[72px]"
    >
      <div
        className="rounded-[24px] p-[52px_50px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative overflow-hidden"
        style={{ background: 'linear-gradient(150deg,#16335A,#0E2746)' }}
      >
        {/* Decorative circle */}
        <div
          aria-hidden="true"
          className="absolute -top-10 -right-10 w-[220px] h-[220px] rounded-full"
          style={{ background: 'rgba(127,176,78,0.12)' }}
        />

        {/* Left: text */}
        <div className="relative">
          <p className="font-sans text-[13px] font-bold tracking-[2px] uppercase text-accent-muted mb-[14px]">
            {COPY.label}
          </p>
          <h2
            id="pathlab-heading"
            className="font-display font-[500] text-[36px] text-white leading-[1.15] tracking-[-0.4px] mb-[18px] whitespace-pre-line"
          >
            {COPY.heading}
          </h2>
          <p className="font-sans text-[16px] text-[#A9BBD6] leading-[1.75] mb-[26px] max-w-[430px]">
            {COPY.body}
          </p>
          <Link
            href="/services#path-lab"
            className="inline-flex items-center gap-[9px] bg-accent hover:bg-accent-dark text-white font-sans font-bold text-[15px] px-[26px] py-[14px] rounded-[11px] motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark"
          >
            {COPY.cta}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.4" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>

        {/* Right: 2×2 test grid */}
        <div className="relative grid grid-cols-2 gap-[13px]">
          {TESTS.map(({ title, desc }) => (
            <div
              key={title}
              className="rounded-[14px] p-[18px]"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
            >
              <div className="font-display text-[17px] font-semibold text-white mb-[5px]">{title}</div>
              <div className="font-sans text-[13px] text-[#9DB0CE] leading-[1.55]">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
