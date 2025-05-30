import { Category, Homepage, Discover, Workshop, About, Faq, Process } from '@/payload-types'

export type CollectionSlugToType = {
  categories: Category
  workshops: Workshop
  faq: Faq
}

export type CollectionSlug = keyof CollectionSlugToType & string

export type GlobalSlugToType = {
  homepage: Homepage
  discover: Discover
  about: About
  process: Process
}

export type GlobalSlug = keyof GlobalSlugToType & string
