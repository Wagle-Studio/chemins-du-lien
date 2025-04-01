import { cache } from 'react'
import { draftMode } from 'next/headers'
import { CollectionConfig, DataFromCollectionSlug, getPayload, GlobalConfig } from 'payload'
import { Article, Cursus, Exercice, Homepage } from '@/payload-types'
import configPromise from '@payload-config'

type CollectionSlugToType = {
  cursus: Cursus
  exercices: Exercice
  articles: Article
}

type CollectionSlug = keyof CollectionSlugToType & string

type GlobalSlugToType = {
  homepage: Homepage
}

type GlobalSlug = keyof GlobalSlugToType & string

// Initializes Payload with config
export const getPayloadClient = async () => getPayload({ config: configPromise })

// Finds global document.
export const getGlobal = async <TSlug extends GlobalSlug>(
  slug: TSlug,
  depth = 0,
): Promise<GlobalSlugToType[TSlug]> => {
  const payload = await getPayloadClient()

  const result = await payload.findGlobal({ slug, depth })

  return result as GlobalSlugToType[TSlug]
}

// Finds every collection documents.
export const getCollection = async <TSlug extends CollectionSlug>(
  slug: TSlug,
  depth = 0,
): Promise<CollectionSlugToType[TSlug][]> => {
  const payload = await getPayloadClient()

  const result = await payload.find({
    collection: slug,
    depth,
  })

  return result.docs as CollectionSlugToType[TSlug][]
}

// Finds collection document by it's slug.
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

// Lists every collection slugs.
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

// Extracts cursus' collection document exercice slugs.
export const getExerciceSlugsFromCursus = (cursus: Cursus): string[] => {
  if (!('exercices' in cursus)) return []

  return (
    (cursus.exercices as Array<{ slug?: string } | number>)
      ?.filter((ex): ex is { slug: string } => typeof ex === 'object' && !!ex.slug)
      ?.map((ex) => ex.slug) ?? []
  )
}

// Caches collection entries.
export const getEntryBySlugCached = cache(getEntryBySlug)

// Caches global entries.
export const getGlobalCached = cache(getGlobal)

// Extracts collection slugs to generates static params.
export const getStaticParamsFromSlugs = async <TSlug extends CollectionSlug>(
  collection: TSlug,
): Promise<{ slug: string }[]> => {
  const slugs = await getSlugsFromCollection(collection)
  return slugs.map((slug) => ({ slug }))
}

// Serves appropriate url for live preview;
export const serveLivePreview = (
  data: Record<string, any>,
  collectionConfig: CollectionConfig | undefined,
  globalConfig: GlobalConfig | undefined,
): string => {
  if (collectionConfig && !globalConfig) {
    switch (collectionConfig.slug) {
      case 'pages':
        return `/api/preview?redirect=/${data.slug}`
      case 'cursus':
        return `/api/preview?redirect=/didacticiel/${data.slug}`
      case 'exercices':
        return `/api/preview?redirect=/didacticiel/exercice/${data.slug}`
      default:
        return '/'
    }
  }

  if (globalConfig && !collectionConfig) {
    switch (globalConfig.slug) {
      case 'homepage':
        return `/api/preview?redirect=/`
      default:
        return '/'
    }
  }

  return '/'
}

// Finds the three latest events.
export const getLatestEvents = async (): Promise<any[]> => {
  const payload = await getPayloadClient()

  const result = await payload.find({
    collection: 'events',
    limit: 3,
    sort: 'date',
    where: {
      date: {
        greater_than_equal: new Date().toISOString(),
      },
    },
  })

  return result.docs
}
