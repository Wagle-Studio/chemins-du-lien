import { Category, Homepage, Discover, Workshop, About } from '@/payload-types'

export type CollectionSlugToType = {
  categories: Category
  workshops: Workshop
}

export type CollectionSlug = keyof CollectionSlugToType & string

export type GlobalSlugToType = {
  homepage: Homepage
  discover: Discover
  about: About
}

export type GlobalSlug = keyof GlobalSlugToType & string
