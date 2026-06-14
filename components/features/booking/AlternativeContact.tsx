const COPY = {
  heading:       'Prefer to book directly?',
  callLabel:     'Call us',
  callSub:       '7895881063',
  waLabel:       'WhatsApp us',
  waSub:         'Chat or video call',
  hoursHeading:  'Clinic hours',
  hoursMF:       'Mon – Sat',
  hoursMFValue:  '9am–2pm · 4pm–5pm',
  hoursSun:      'Sunday',
  hoursSunValue: 'Closed',
  phone:         '7895881063',
} as const

export function AlternativeContact() {
  return (
    <>
      {/* Direct contact card */}
      <div className="bg-white border border-[#EFE7D7] rounded-[18px] p-[22px]">
        <p className="font-sans text-[13px] font-bold text-primary mb-[14px]">
          {COPY.heading}
        </p>

        <a
          href={`tel:${COPY.phone}`}
          className="flex items-center gap-3 p-3 rounded-[11px] border border-[#EAE2D2] mb-[10px] hover:border-primary group motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
        >
          <div className="w-[38px] h-[38px] rounded-[10px] bg-[#E7EEF7] flex items-center justify-center flex-shrink-0" aria-hidden="true">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#1E4E8C" strokeWidth="1.9">
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
            </svg>
          </div>
          <div>
            <div className="font-sans text-[14px] font-bold text-primary">{COPY.callLabel}</div>
            <div className="font-sans text-[13px] text-muted">{COPY.callSub}</div>
          </div>
        </a>

        <a
          href={`https://wa.me/91${COPY.phone}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp us (opens in new tab)"
          className="flex items-center gap-3 p-3 rounded-[11px] border border-[#EAE2D2] hover:border-[#25D366] group motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-1"
        >
          <div className="w-[38px] h-[38px] rounded-[10px] bg-[#EAF7EE] flex items-center justify-center flex-shrink-0" aria-hidden="true">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="#25D366">
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </div>
          <div>
            <div className="font-sans text-[14px] font-bold text-primary">{COPY.waLabel}</div>
            <div className="font-sans text-[13px] text-muted">{COPY.waSub}</div>
          </div>
        </a>
      </div>

      {/* Hours card */}
      <div className="bg-cream-2 border border-[#ECE2D0] rounded-[18px] p-[22px]">
        <p className="font-sans text-[13px] font-bold text-primary mb-[14px]">
          {COPY.hoursHeading}
        </p>
        <div className="flex justify-between py-[7px] border-b border-[#E6DBC8]">
          <span className="font-sans text-[13.5px] text-muted">{COPY.hoursMF}</span>
          <span className="font-sans text-[13.5px] font-semibold text-primary">{COPY.hoursMFValue}</span>
        </div>
        <div className="flex justify-between py-[7px]">
          <span className="font-sans text-[13.5px] text-muted">{COPY.hoursSun}</span>
          <span className="font-sans text-[13.5px] font-semibold text-[#C0392B]">{COPY.hoursSunValue}</span>
        </div>
      </div>
    </>
  )
}
