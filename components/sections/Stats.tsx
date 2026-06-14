const TRUST_POINTS = [
  'Retd. Director, Animal Husbandry, Uttarakhand',
  'Modern lab — fast, accurate results',
  'Cattle, pets & poultry — all welcome',
] as const

function CheckIcon() {
  return (
    <svg
      width="18" height="18" viewBox="0 0 24 24"
      fill="none" stroke="#7FB04E" strokeWidth="2.2"
      aria-hidden="true"
      className="flex-shrink-0"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export function Stats() {
  return (
    <section aria-label="Why choose us" className="bg-primary">
      <div className="max-w-container mx-auto px-10 py-[22px] flex items-center justify-between flex-wrap gap-4">
        {TRUST_POINTS.map(point => (
          <div key={point} className="flex items-center gap-[10px] font-sans text-[14px] font-[500] text-[#CBD8EC]">
            <CheckIcon />
            {point}
          </div>
        ))}
      </div>
    </section>
  )
}
