import { Category, Homepage, Discover, Workshop, About, Faq } from '@/payload-types'

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
}

export type GlobalSlug = keyof GlobalSlugToType & string
