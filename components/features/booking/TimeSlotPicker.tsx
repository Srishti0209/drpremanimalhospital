'use client'

import { cn } from '@/lib/utils'

const MORNING_SLOTS = [
  '09:00', '09:30', '10:00', '10:30', '11:00',
  '11:30', '12:00', '12:30', '13:00', '13:30',
] as const

const EVENING_SLOTS = ['16:00', '16:30'] as const

function formatSlot(time: string): string {
  const [h, m] = time.split(':').map(Number)
  const period = h >= 12 ? 'pm' : 'am'
  const h12    = h > 12 ? h - 12 : h === 0 ? 12 : h
  return `${h12}:${String(m).padStart(2, '0')}`
}

interface TimeSlotPickerProps {
  value:    string
  onChange: (slot: string) => void
}

export function TimeSlotPicker({ value, onChange }: TimeSlotPickerProps) {
  return (
    <div role="group" aria-labelledby="time-slot-label">
      <p id="time-slot-label" className="sr-only">Choose a time slot</p>

      {/* Morning */}
      <p className="font-sans text-[12px] font-bold text-tan uppercase tracking-[1px] mb-[10px]">
        Morning · 9:00 – 2:00
      </p>
      <div className="grid grid-cols-5 gap-2 mb-[18px]">
        {MORNING_SLOTS.map(slot => (
          <button
            key={slot}
            type="button"
            aria-pressed={value === slot}
            aria-label={`${formatSlot(slot)} am`}
            onClick={() => onChange(slot)}
            className={cn(
              'font-sans text-[13px] font-semibold py-2 rounded-[9px] border motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1',
              value === slot
                ? 'bg-primary text-white border-primary'
                : 'bg-cream border-[#EAE2D2] text-primary hover:border-primary hover:bg-accent-light'
            )}
          >
            {formatSlot(slot)}
          </button>
        ))}
      </div>

      {/* Evening */}
      <p className="font-sans text-[12px] font-bold text-tan uppercase tracking-[1px] mb-[10px]">
        Evening · 4:00 – 5:00
      </p>
      <div className="grid grid-cols-5 gap-2">
        {EVENING_SLOTS.map(slot => (
          <button
            key={slot}
            type="button"
            aria-pressed={value === slot}
            aria-label={`${formatSlot(slot)} pm`}
            onClick={() => onChange(slot)}
            className={cn(
              'font-sans text-[13px] font-semibold py-2 rounded-[9px] border motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1',
              value === slot
                ? 'bg-primary text-white border-primary'
                : 'bg-cream border-[#EAE2D2] text-primary hover:border-primary hover:bg-accent-light'
            )}
          >
            {formatSlot(slot)}
          </button>
        ))}
      </div>
    </div>
  )
}
