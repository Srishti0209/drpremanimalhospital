import type { Metadata } from 'next'
import { BookingForm } from '@/components/features/booking/BookingForm'

export const metadata: Metadata = {
  title: 'Book an Appointment',
  description:
    'Book an online consultation (WhatsApp video call) or an in-clinic visit with Dr. Prem Kumar ' +
    'in Muzaffarnagar. Pick your date, time and confirm instantly.',
}

// CSR — booking state is client-side only, no revalidate needed
export default function BookPage() {
  return <BookingForm />
}
