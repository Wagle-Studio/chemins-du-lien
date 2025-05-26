import { Article, Category, Cursus, Event, Exercice, Homepage, Discover } from '@/payload-types'

export type CollectionSlugToType = {
  articles: Article
  categories: Category
  cursus: Cursus
  events: Event
  exercices: Exercice
}

export type CollectionSlug = keyof CollectionSlugToType & string

export type GlobalSlugToType = {
  homepage: Homepage
  discover: Discover
}

export type GlobalSlug = keyof GlobalSlugToType & string
