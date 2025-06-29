import { Category, Homepage, Discover, Workshop, Contact, Faq, Process } from '@/payload-types'

export type CollectionSlugToType = {
  categories: Category
  workshops: Workshop
  faq: Faq
}

export type CollectionSlug = keyof CollectionSlugToType & string

export type GlobalSlugToType = {
  homepage: Homepage
  discover: Discover
  contact: Contact
  process: Process
}

export type GlobalSlug = keyof GlobalSlugToType & string
