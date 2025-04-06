import { Article, Category, Cursus, Event, Exercice, Homepage } from '@/payload-types'

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
}

export type GlobalSlug = keyof GlobalSlugToType & string
