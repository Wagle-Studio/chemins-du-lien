import { Article, Event, User } from '@/payload-types'

export type LoginResponse = {
  user: User
  token: string
}

export type RegisterResponse = {
  user: User
  token: string
}

export type EventsResponse = Event[]

export type ArticlesResponse = Article[]

export type FilterOperator =
  | 'equals'
  | 'not_equals'
  | 'in'
  | 'not_in'
  | 'like'
  | 'contains'
  | 'greater_than'
  | 'less_than'
  | 'greater_than_equal'
  | 'less_than_equal'

export type RawFilterValue = {
  operator: FilterOperator
  value?: string | string[]
}
