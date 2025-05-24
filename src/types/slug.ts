import { Article, Category, Cursus, Event, Exercice, Homepage, Process } from '@/payload-types'

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
  process: Process
}

export type GlobalSlug = keyof GlobalSlugToType & string
