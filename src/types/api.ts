import { Event, User } from '@/payload-types'

export type LoginResponse = {
  user: User
  token: string
}

export type RegisterResponse = {
  user: User
  token: string
}

export type EventsResponse = Event[]
