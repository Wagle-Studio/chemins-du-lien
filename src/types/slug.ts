import { Category, Homepage, Discover, Workshop } from '@/payload-types'

export type CollectionSlugToType = {
  categories: Category
  workshops: Workshop
}

export type CollectionSlug = keyof CollectionSlugToType & string

export type GlobalSlugToType = {
  homepage: Homepage
  discover: Discover
}

export type GlobalSlug = keyof GlobalSlugToType & string
