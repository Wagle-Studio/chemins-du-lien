import { DataFromCollectionSlug, Where } from 'payload'
import { draftMode } from 'next/headers'
import { Article, Category, Cursus, Event, Exercice } from '@/payload-types'
import { getPayloadClient } from './client'

type CollectionSlugToType = {
  cursus: Cursus
  events: Event
  exercices: Exercice
  articles: Article
  categories: Category
}

type CollectionSlug = keyof CollectionSlugToType & string

// Finds all documents of a collection
export const getCollection = async <TSlug extends CollectionSlug>(
  slug: TSlug,
  depth = 0,
): Promise<CollectionSlugToType[TSlug][]> => {
  const payload = await getPayloadClient()
  const result = await payload.find({ collection: slug, depth })
  return result.docs as CollectionSlugToType[TSlug][]
}

// Finds documents from a collection using optional filters
export const getCollectionWithParams = async <TSlug extends CollectionSlug>(
  slug: TSlug,
  params: {
    depth?: number
    limit?: number
    sort?: string
    where?: Where
    draft?: boolean
    overrideAccess?: boolean
    pagination?: boolean
    select?: Record<string, boolean>
  } = {},
): Promise<CollectionSlugToType[TSlug][]> => {
  const payload = await getPayloadClient()
  const result = await payload.find({ collection: slug, ...params })
  return result.docs as CollectionSlugToType[TSlug][]
}

// Finds one document in a collection using its slug
export const getEntryBySlug = async <TSlug extends CollectionSlug>(
  collection: TSlug,
  slug: string,
): Promise<DataFromCollectionSlug<TSlug> | null> => {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection,
    draft,
    overrideAccess: draft,
    pagination: false,
    limit: 1,
    where: {
      slug: {
        equals: slug,
      },
    },
  })
  return result.docs?.[0] || null
}

// Lists all document slugs of a collection
export const getSlugsFromCollection = async <TSlug extends CollectionSlug>(
  collection: TSlug,
): Promise<string[]> => {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection,
    draft: false,
    limit: 100,
    overrideAccess: false,
    pagination: false,
    select: { slug: true },
  })
  return result.docs.map((doc: any) => doc.slug)
}

// Builds static route params for dynamic routes
export const getStaticParamsFromSlugs = async <TSlug extends CollectionSlug>(
  collection: TSlug,
): Promise<{ slug: string }[]> => {
  const slugs = await getSlugsFromCollection(collection)
  return slugs.map((slug) => ({ slug }))
}
