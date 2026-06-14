'use client'

import type { AppointmentType } from '@/types'
import { cn } from '@/lib/utils'

const COPY = {
  legend: 'Choose consultation type',
  online: {
    title:    'Online consultation',
    subtitle: 'WhatsApp video call from home',
  },
  clinic: {
    title:    'Visit the clinic',
    subtitle: 'In-person at Muzaffarnagar',
  },
} as const

interface AppointmentTypeSelectorProps {
  value:    AppointmentType
  onChange: (type: AppointmentType) => void
}

export function AppointmentTypeSelector({ value, onChange }: AppointmentTypeSelectorProps) {
  return (
    <fieldset>
      <legend className="sr-only">{COPY.legend}</legend>
      <div className="flex gap-4" role="radiogroup" aria-label={COPY.legend}>

        {/* Online tab */}
        <button
          type="button"
          role="radio"
          aria-checked={value === 'online'}
          onClick={() => onChange('online')}
          className={cn(
            'flex-1 flex items-center gap-3 rounded-2xl p-4 border motion-safe:transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 text-left',
            value === 'online'
              ? 'border-2 border-accent bg-accent/[0.06]'
              : 'border border-[#EFE7D7] bg-white hover:border-accent/40'
          )}
        >
          <div
            className="w-[46px] h-[46px] flex-shrink-0 rounded-[11px] flex items-center justify-center"
            style={{ background: 'rgba(127,176,78,0.18)' }}
            aria-hidden="true"
          >
            <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#7FB04E" strokeWidth="1.9">
              <path d="m23 7-7 5 7 5V7Z" />
              <rect x="1" y="5" width="15" height="14" rx="2" />
            </svg>
          </div>
          <div className="text-left">
            <div className="font-display text-[18px] font-semibold text-primary">{COPY.online.title}</div>
            <div className="font-sans text-[13px] text-muted mt-0.5">{COPY.online.subtitle}</div>
          </div>
        </button>

        {/* Clinic tab */}
        <button
          type="button"
          role="radio"
          aria-checked={value === 'clinic'}
          onClick={() => onChange('clinic')}
          className={cn(
            'flex-1 flex items-center gap-3 rounded-2xl p-4 border motion-safe:transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 text-left',
            value === 'clinic'
              ? 'border-2 border-primary bg-primary/[0.06]'
              : 'border border-[#EFE7D7] bg-white hover:border-primary/40'
          )}
        >
          <div
            className="w-[46px] h-[46px] flex-shrink-0 rounded-[11px] flex items-center justify-center"
            style={{ background: 'rgba(30,78,140,0.14)' }}
            aria-hidden="true"
          >
            <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#1E4E8C" strokeWidth="1.9">
              <path d="M3 21V8l9-5 9 5v13M3 21h18M9 21v-6h6v6" />
            </svg>
          </div>
          <div className="text-left">
            <div className="font-display text-[18px] font-semibold text-primary">{COPY.clinic.title}</div>
            <div className="font-sans text-[13px] text-muted mt-0.5">{COPY.clinic.subtitle}</div>
          </div>
        </button>

      </div>
    </fieldset>
  )
}
