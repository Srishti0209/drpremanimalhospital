'use client'

import { useBookingForm } from '@/hooks/useBookingForm'
import { AppointmentTypeSelector } from './AppointmentTypeSelector'
import { CalendarPicker } from './CalendarPicker'
import { TimeSlotPicker } from './TimeSlotPicker'
import { AnimalTypeSelector } from './AnimalTypeSelector'
import { BookingSummaryCard } from './BookingSummaryCard'
import { AlternativeContact } from './AlternativeContact'
import type { AppointmentType, AnimalType } from '@/types'

const COPY = {
  sectionLabel: 'Book a consultation',
  heading:      "Choose how you'd like to consult",
  subheading:   "Pick a date and time below. We'll confirm every booking personally by call or WhatsApp.",
  step1:        'Select a date',
  step2:        'Choose a time',
  step3:        'Type of animal',
} as const

function StepHeading({ n, label }: { n: number; label: string }) {
  return (
    <div className="flex items-center gap-[10px] mb-4">
      <span
        className="w-6 h-6 rounded-full bg-primary text-white font-sans text-[13px] font-bold flex items-center justify-center flex-shrink-0"
        aria-hidden="true"
      >
        {n}
      </span>
      <span className="font-sans text-[15px] font-bold text-primary">{label}</span>
    </div>
  )
}

export function BookingForm() {
  const {
    form,
    setField,
    setDate,
    canConfirm,
    dateDisplay,
    timeDisplay,
    animalDisplay,
    whatsappHref,
  } = useBookingForm()

  return (
    <div className="bg-cream">

      {/* ── Page hero ─────────────────────────────────────────────── */}
      <div className="max-w-[1100px] mx-auto px-10 pt-14 pb-3 text-center">
        <p className="font-sans text-[13px] font-bold tracking-[2px] uppercase text-accent mb-3">
          {COPY.sectionLabel}
        </p>
        <h1 className="font-display font-[500] text-[46px] text-primary tracking-[-0.7px] leading-[1.1] mb-4">
          {COPY.heading}
        </h1>
        <p className="font-sans text-[17px] text-muted leading-[1.7] max-w-[560px] mx-auto">
          {COPY.subheading}
        </p>
      </div>

      {/* ── Appointment type tabs ──────────────────────────────────── */}
      <div className="max-w-[1100px] mx-auto px-10 pt-8">
        <AppointmentTypeSelector
          value={form.appointmentType}
          onChange={v => setField('appointmentType', v as AppointmentType)}
        />
      </div>

      {/* ── Main 2-col body ───────────────────────────────────────── */}
      <div className="max-w-[1100px] mx-auto px-10 pt-6 pb-10 grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-6 items-start">

        {/* Left: white card ─────────────────────────────────────── */}
        <div className="bg-white border border-[#EFE7D7] rounded-[20px] p-7 shadow-card">

          {/* Step 1 — Calendar */}
          <div>
            <StepHeading n={1} label={COPY.step1} />
            <CalendarPicker
              value={form.date}
              onChange={setDate}
            />
          </div>

          {/* Step 2 — Time slots (revealed after date is picked) */}
          {form.date && (
            <div className="mt-[26px]">
              <StepHeading n={2} label={COPY.step2} />
              <TimeSlotPicker
                value={form.timeSlot}
                onChange={v => setField('timeSlot', v)}
              />
            </div>
          )}

          {/* Step 3 — Animal type */}
          <div className="mt-[26px]">
            <StepHeading n={3} label={COPY.step3} />
            <AnimalTypeSelector
              value={form.animalType}
              onChange={v => setField('animalType', v as AnimalType)}
            />
          </div>
        </div>

        {/* Right: sticky column ─────────────────────────────────── */}
        <div className="lg:sticky lg:top-24 flex flex-col gap-4">
          <BookingSummaryCard
            appointmentType={form.appointmentType}
            dateDisplay={dateDisplay}
            timeDisplay={timeDisplay}
            animalDisplay={animalDisplay}
            patientName={form.patientName}
            phone={form.phone}
            email={form.email}
            canConfirm={canConfirm}
            whatsappHref={whatsappHref}
            onNameChange={v  => setField('patientName', v)}
            onPhoneChange={v => setField('phone', v)}
            onEmailChange={v => setField('email', v)}
          />
          <AlternativeContact />
        </div>

      </div>
    </div>
  )
}
