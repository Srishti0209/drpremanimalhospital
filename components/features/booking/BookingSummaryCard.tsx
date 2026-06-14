'use client'

import type { AppointmentType, AnimalType } from '@/types'

const COPY = {
  label:          'Your booking',
  onlineBadge:    'Online — WhatsApp video call',
  dateLabel:      'Date',
  timeLabel:      'Time',
  animalLabel:    'Animal',
  namePlaceholder:  'Your name',
  phonePlaceholder: 'Phone / WhatsApp number',
  emailPlaceholder: 'Email address (optional)',
  cta:            'Confirm via WhatsApp',
  helper:         "Pick a date, time & enter your number to confirm. We'll reply to lock your slot.",
} as const

interface BookingSummaryCardProps {
  appointmentType: AppointmentType
  dateDisplay:     string
  timeDisplay:     string
  animalDisplay:   string
  patientName:     string
  phone:           string
  email:           string
  canConfirm:      boolean
  whatsappHref:    string | undefined
  onNameChange:    (v: string) => void
  onPhoneChange:   (v: string) => void
  onEmailChange:   (v: string) => void
}

// Reusable dark-themed input
function DarkInput({
  id, value, placeholder, type = 'text', required = false, autoComplete,
  'aria-label': ariaLabel, onChange,
}: {
  id:           string
  value:        string
  placeholder:  string
  type?:        string
  required?:    boolean
  autoComplete?: string
  'aria-label': string
  onChange:     (v: string) => void
}) {
  return (
    <input
      id={id}
      type={type}
      value={value}
      placeholder={placeholder}
      required={required}
      autoComplete={autoComplete}
      aria-label={ariaLabel}
      aria-required={required || undefined}
      onChange={e => onChange(e.target.value)}
      className="w-full font-sans text-[14px] text-white placeholder:text-white/40 rounded-[10px] px-[14px] py-3 outline-none focus-visible:ring-2 focus-visible:ring-white/40"
      style={{
        background: 'rgba(255,255,255,0.08)',
        border:     '1px solid rgba(255,255,255,0.16)',
      }}
    />
  )
}

function SummaryRow({
  iconPath, label, value,
}: {
  iconPath: string; label: string; value: string
}) {
  return (
    <div className="flex items-center gap-3">
      <svg
        width="18" height="18" viewBox="0 0 24 24"
        fill="none" stroke="#7E97B8" strokeWidth="1.9"
        className="flex-shrink-0"
        aria-hidden="true"
      >
        <path d={iconPath} />
      </svg>
      <div>
        <div className="font-sans text-[11px] text-[#7E97B8] uppercase tracking-[0.5px]">{label}</div>
        <div className="font-sans text-[14.5px] font-semibold text-white">{value}</div>
      </div>
    </div>
  )
}

export function BookingSummaryCard({
  appointmentType, dateDisplay, timeDisplay, animalDisplay,
  patientName, phone, email,
  canConfirm, whatsappHref,
  onNameChange, onPhoneChange, onEmailChange,
}: BookingSummaryCardProps) {
  return (
    <div
      className="rounded-[20px] p-[26px] text-white"
      style={{ background: '#16335A', boxShadow: '0 22px 50px -34px rgba(22,51,90,0.6)' }}
    >
      {/* Header */}
      <p className="font-sans text-[12px] font-bold tracking-[1.5px] uppercase text-accent-muted mb-[18px]">
        {COPY.label}
      </p>

      {/* Online badge */}
      {appointmentType === 'online' && (
        <div
          className="flex items-center gap-[10px] rounded-[10px] px-[13px] py-[11px] mb-[18px]"
          style={{ background: 'rgba(127,176,78,0.14)', border: '1px solid rgba(127,176,78,0.3)' }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B6D996" strokeWidth="2" aria-hidden="true">
            <path d="m23 7-7 5 7 5V7Z" />
            <rect x="1" y="5" width="15" height="14" rx="2" />
          </svg>
          <span className="font-sans text-[13.5px] font-semibold text-[#D6E8C4]">
            {COPY.onlineBadge}
          </span>
        </div>
      )}

      {/* Summary rows */}
      <div className="flex flex-col gap-[13px] mb-5">
        <SummaryRow
          iconPath="M3 4h18v18H3V4ZM16 2v4M8 2v4M3 10h18"
          label={COPY.dateLabel}
          value={dateDisplay}
        />
        <SummaryRow
          iconPath="M12 3a9 9 0 1 0 0 18A9 9 0 0 0 12 3ZM12 7v5l3 2"
          label={COPY.timeLabel}
          value={timeDisplay}
        />
        <SummaryRow
          iconPath="M10 5.2a3 3 0 1 1-4 2.8M19 8a2.5 2.5 0 1 1-3.3 2.3M7 21c0-3 2-5 5-5s5 2 5 5"
          label={COPY.animalLabel}
          value={animalDisplay}
        />
      </div>

      {/* Patient fields */}
      <div className="flex flex-col gap-[10px] mb-[18px]">
        <DarkInput
          id="patient-name"
          value={patientName}
          placeholder={COPY.namePlaceholder}
          required
          autoComplete="name"
          aria-label="Your name (required)"
          onChange={onNameChange}
        />
        <DarkInput
          id="patient-phone"
          value={phone}
          placeholder={COPY.phonePlaceholder}
          type="tel"
          required
          autoComplete="tel"
          aria-label="Phone or WhatsApp number (required)"
          onChange={onPhoneChange}
        />
        <DarkInput
          id="patient-email"
          value={email}
          placeholder={COPY.emailPlaceholder}
          type="email"
          autoComplete="email"
          aria-label="Email address (optional)"
          onChange={onEmailChange}
        />
      </div>

      {/* CTA */}
      {whatsappHref ? (
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Confirm booking via WhatsApp (opens in new tab)"
          className="flex items-center justify-center gap-2 w-full bg-accent hover:bg-accent-dark text-white font-sans font-bold text-[15px] py-[13px] rounded-[11px] motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 flex-shrink-0" aria-hidden="true">
            <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          {COPY.cta}
        </a>
      ) : (
        <button
          type="button"
          disabled
          aria-disabled="true"
          className="w-full bg-white/10 text-white/40 font-sans font-bold text-[15px] py-[13px] rounded-[11px] cursor-not-allowed"
        >
          {COPY.cta}
        </button>
      )}

      <p className="font-sans text-[12px] text-[#7E97B8] text-center mt-3 leading-[1.5]">
        {COPY.helper}
      </p>
    </div>
  )
}
