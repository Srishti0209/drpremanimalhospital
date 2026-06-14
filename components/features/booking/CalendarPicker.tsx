'use client'

import { useState, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] as const

function isoDate(year: number, month: number, day: number): string {
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
}

function todayISO(): string {
  const d = new Date()
  return isoDate(d.getFullYear(), d.getMonth(), d.getDate())
}

function isDisabledDate(year: number, month: number, day: number): boolean {
  const today = new Date(); today.setHours(0, 0, 0, 0)
  const d = new Date(year, month, day)
  return d < today || d.getDay() === 0   // past or Sunday
}

interface CalendarPickerProps {
  value:    string
  onChange: (date: string) => void
}

export function CalendarPicker({ value, onChange }: CalendarPickerProps) {
  const today = todayISO()

  const [view, setView] = useState<{ year: number; month: number }>(() => {
    const d = value ? new Date(value + 'T00:00:00') : new Date()
    return { year: d.getFullYear(), month: d.getMonth() }
  })

  const { year, month } = view

  // Build calendar cells — null = empty offset cell
  const firstDay    = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const cells: (number | null)[] = [
    ...Array<null>(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ]
  while (cells.length % 7 !== 0) cells.push(null)

  const monthLabel = new Date(year, month, 1).toLocaleDateString('en-IN', {
    month: 'long', year: 'numeric',
  })

  function prevMonth() {
    setView(v => v.month === 0
      ? { year: v.year - 1, month: 11 }
      : { year: v.year,     month: v.month - 1 })
  }

  function nextMonth() {
    setView(v => v.month === 11
      ? { year: v.year + 1, month: 0 }
      : { year: v.year,     month: v.month + 1 })
  }

  function handleSelect(day: number) {
    if (isDisabledDate(year, month, day)) return
    onChange(isoDate(year, month, day))
  }

  // Arrow-key navigation within the grid — moves focus to adjacent dates
  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLButtonElement>, day: number) => {
    const deltas: Record<string, number> = {
      ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7,
    }
    const delta = deltas[e.key]
    if (!delta) return
    e.preventDefault()

    const target = new Date(year, month, day + delta)
    const targetISO = isoDate(target.getFullYear(), target.getMonth(), target.getDate())

    // Navigate view month if needed
    if (target.getMonth() !== month || target.getFullYear() !== year) {
      setView({ year: target.getFullYear(), month: target.getMonth() })
    }
    // Focus the target button after render
    setTimeout(() => {
      const btn = document.querySelector<HTMLButtonElement>(`[data-date="${targetISO}"]`)
      btn?.focus()
    }, 20)

    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleSelect(day)
    }
  }, [year, month])

  return (
    <div>
      {/* Month nav */}
      <div className="flex items-center justify-between mb-4">
        <button
          type="button"
          onClick={prevMonth}
          aria-label="Previous month"
          className="w-[38px] h-[38px] rounded-[10px] border border-[#EAE2D2] bg-cream flex items-center justify-center hover:bg-[#F1ECE0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 motion-safe:transition-colors"
        >
          <ChevronLeft className="h-[18px] w-[18px] text-primary" aria-hidden="true" />
        </button>

        <span className="font-display text-[20px] font-semibold text-primary" aria-live="polite">
          {monthLabel}
        </span>

        <button
          type="button"
          onClick={nextMonth}
          aria-label="Next month"
          className="w-[38px] h-[38px] rounded-[10px] border border-[#EAE2D2] bg-cream flex items-center justify-center hover:bg-[#F1ECE0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 motion-safe:transition-colors"
        >
          <ChevronRight className="h-[18px] w-[18px] text-primary" aria-hidden="true" />
        </button>
      </div>

      {/* Weekday headers */}
      <div className="grid grid-cols-7 gap-[6px] mb-[6px]" aria-hidden="true">
        {WEEKDAYS.map(d => (
          <div
            key={d}
            className="text-center font-sans text-[11px] font-bold text-[#A89C86] uppercase tracking-[0.5px]"
          >
            {d}
          </div>
        ))}
      </div>

      {/* Day grid */}
      <div
        role="grid"
        aria-label={`Calendar — ${monthLabel}`}
        className="grid grid-cols-7 gap-[6px]"
      >
        {cells.map((day, idx) => {
          if (!day) {
            return (
              <div key={`empty-${idx}`} role="gridcell" aria-hidden="true" />
            )
          }

          const dateStr    = isoDate(year, month, day)
          const disabled   = isDisabledDate(year, month, day)
          const isSelected = dateStr === value
          const isToday    = dateStr === today
          const isSunday   = new Date(year, month, day).getDay() === 0

          return (
            <div key={dateStr} role="gridcell">
              <button
                type="button"
                data-date={dateStr}
                aria-selected={isSelected || undefined}
                aria-disabled={disabled || undefined}
                aria-label={`${new Date(year, month, day).toLocaleDateString('en-IN', {
                  weekday: 'long', day: 'numeric', month: 'long',
                })}${isSunday ? ' — closed' : ''}`}
                disabled={disabled}
                onClick={() => handleSelect(day)}
                onKeyDown={e => handleKeyDown(e, day)}
                className={cn(
                  'w-full aspect-square rounded-[8px] font-sans text-[13.5px] font-semibold flex items-center justify-center motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1',
                  isSelected && 'bg-primary text-white',
                  !isSelected && isToday && 'border-2 border-accent text-primary',
                  !isSelected && !isToday && !disabled && 'text-primary hover:bg-accent-light',
                  disabled && isSunday && 'text-[#C5BAA8] cursor-not-allowed line-through',
                  disabled && !isSunday && 'text-[#C5BAA8] cursor-not-allowed',
                )}
              >
                {day}
              </button>
            </div>
          )
        })}
      </div>

      {/* Legend */}
      <div className="flex gap-4 mt-4 pt-[14px] border-t border-[#F1ECE0]" aria-hidden="true">
        <div className="flex items-center gap-[7px] font-sans text-[12px] text-[#8A8073]">
          <span className="w-3 h-3 rounded-[4px] border-[1.6px] border-accent flex-shrink-0" />
          Today
        </div>
        <div className="flex items-center gap-[7px] font-sans text-[12px] text-[#8A8073]">
          <span className="w-3 h-3 rounded-[4px] bg-primary flex-shrink-0" />
          Selected
        </div>
        <div className="flex items-center gap-[7px] font-sans text-[12px] text-[#8A8073]">
          <span className="line-through">Sun</span>
          Closed
        </div>
      </div>
    </div>
  )
}
