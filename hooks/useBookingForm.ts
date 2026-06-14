'use client'

import { useState } from 'react'
import type { AppointmentType, AnimalType } from '@/types'

export interface BookingState {
  appointmentType: AppointmentType
  date:            string       // 'YYYY-MM-DD'
  timeSlot:        string       // '09:00', '16:30', etc.
  animalType:      AnimalType | ''
  patientName:     string
  phone:           string
  email:           string       // optional
}

const INITIAL: BookingState = {
  appointmentType: 'clinic',
  date:            '',
  timeSlot:        '',
  animalType:      '',
  patientName:     '',
  phone:           '',
  email:           '',
}

export function useBookingForm() {
  const [form, setForm] = useState<BookingState>(INITIAL)

  function setField<K extends keyof BookingState>(key: K, value: BookingState[K]) {
    setForm(prev => ({ ...prev, [key]: value }))
  }

  // Resetting time slot when date changes is intentional — slots vary by day
  function setDate(date: string) {
    setForm(prev => ({ ...prev, date, timeSlot: '' }))
  }

  const canConfirm =
    form.date !== '' &&
    form.timeSlot !== '' &&
    form.animalType !== '' &&
    form.patientName.trim().length > 0 &&
    form.phone.trim().length >= 10

  // Human-readable displays for the summary card
  const dateDisplay = form.date
    ? new Date(form.date + 'T00:00:00').toLocaleDateString('en-IN', {
        weekday: 'short', day: 'numeric', month: 'short', year: 'numeric',
      })
    : '—'

  const timeDisplay = form.timeSlot
    ? (() => {
        const [h, m] = form.timeSlot.split(':').map(Number)
        const period = h >= 12 ? 'pm' : 'am'
        const h12   = h > 12 ? h - 12 : h === 0 ? 12 : h
        return `${h12}:${String(m).padStart(2, '0')} ${period}`
      })()
    : '—'

  const animalDisplay = form.animalType
    ? form.animalType.charAt(0).toUpperCase() + form.animalType.slice(1)
    : '—'

  // WhatsApp pre-fill (Phase 1 — replaced by Razorpay in Sprint 5 for online)
  const whatsappHref = canConfirm
    ? `https://wa.me/917895881063?text=${encodeURIComponent(
        `Hi Dr. Prem, I'd like to book an appointment.\n\nType: ${
          form.appointmentType === 'online' ? 'Online consultation' : 'In-clinic visit'
        }\nName: ${form.patientName}\nPhone: ${form.phone}${
          form.email ? `\nEmail: ${form.email}` : ''
        }\nAnimal: ${form.animalType}\nDate: ${dateDisplay}\nTime: ${timeDisplay}`
      )}`
    : undefined

  return {
    form,
    setField,
    setDate,
    canConfirm,
    dateDisplay,
    timeDisplay,
    animalDisplay,
    whatsappHref,
  }
}
