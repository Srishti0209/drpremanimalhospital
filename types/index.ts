// types/index.ts
// Single source of truth for all shared TypeScript types.
// Used across presentation, logic, and data layers.

export type AppointmentType = 'online' | 'clinic'

export type AnimalType = 'cow' | 'dog' | 'cat' | 'poultry' | 'other'

export type TimeSlot = 'morning' | 'evening'

export type BookingStep =
  | 'appointment-type'
  | 'animal-type'
  | 'patient-details'
  | 'date-time'
  | 'review'

export interface BookingFormData {
  appointmentType: AppointmentType
  animalType:      AnimalType
  animalName?:     string
  patientName:     string
  phone:           string
  date:            string
  email?:          string
  timeSlot:        TimeSlot
  reason?:         string
}

export interface BookingConfirmation {
  bookingId:       string
  appointmentType: AppointmentType
  patientName:     string
  phone:           string
  date:            string
  email?:          string
  timeSlot:        TimeSlot
  meetLink?:       string   /* Only for online appointments */
  amount?:         number   /* Only for online appointments */
}

export interface BlogPost {
  slug:        string
  title:       string
  excerpt:     string
  content?:    string
  publishedAt: string
  updatedAt?:  string
  coverImage?: string
  tags:        string[]
  author:      string
  lang?:       'en' | 'hi'
}

export interface ApiError {
  message: string
  code?:   string
}

export type ApiResponse<T> =
  | { success: true;  data: T }
  | { success: false; error: ApiError }