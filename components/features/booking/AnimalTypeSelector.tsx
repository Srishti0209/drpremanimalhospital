'use client'

import { useRef } from 'react'
import type { AnimalType } from '@/types'
import { cn } from '@/lib/utils'

const ANIMALS: { value: AnimalType; label: string; emoji: string }[] = [
  { value: 'cow',     label: 'Cow / Buffalo', emoji: '🐄' },
  { value: 'dog',     label: 'Dog',            emoji: '🐕' },
  { value: 'cat',     label: 'Cat',            emoji: '🐈' },
  { value: 'poultry', label: 'Poultry',        emoji: '🐓' },
  { value: 'other',   label: 'Other',           emoji: '🐾' },
]

interface AnimalTypeSelectorProps {
  value:    AnimalType | ''
  onChange: (animal: AnimalType) => void
}

export function AnimalTypeSelector({ value, onChange }: AnimalTypeSelectorProps) {
  const groupRef = useRef<HTMLDivElement>(null)

  // Arrow-key navigation within the radiogroup
  function handleKeyDown(e: React.KeyboardEvent<HTMLButtonElement>, idx: number) {
    let next = idx
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault()
      next = (idx + 1) % ANIMALS.length
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault()
      next = (idx - 1 + ANIMALS.length) % ANIMALS.length
    } else {
      return
    }
    const buttons = groupRef.current?.querySelectorAll<HTMLButtonElement>('[role="radio"]')
    buttons?.[next]?.focus()
  }

  return (
    <div
      ref={groupRef}
      role="radiogroup"
      aria-labelledby="animal-type-label"
      className="flex gap-[9px] flex-wrap"
    >
      <p id="animal-type-label" className="sr-only">Type of animal</p>
      {ANIMALS.map(({ value: animal, label, emoji }, idx) => {
        const selected = value === animal
        return (
          <button
            key={animal}
            type="button"
            role="radio"
            aria-checked={selected}
            tabIndex={selected || (value === '' && idx === 0) ? 0 : -1}
            onClick={() => onChange(animal)}
            onKeyDown={e => handleKeyDown(e, idx)}
            className={cn(
              'flex items-center gap-2 font-sans text-[14px] font-semibold px-4 py-2.5 rounded-[10px] border motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1',
              selected
                ? 'bg-primary text-white border-primary'
                : 'bg-[#F4EEE2] text-primary border-[#EAE2D2] hover:border-primary'
            )}
          >
            <span aria-hidden="true">{emoji}</span>
            {label}
          </button>
        )
      })}
    </div>
  )
}
