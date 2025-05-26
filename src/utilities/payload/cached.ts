import { cache } from 'react'
import { getCollection, getEntryBySlug } from './collections'
import { getGlobal } from './globals'

// Caches the entry-by-slug query using React cache
export const getEntryBySlugCached = cache(getEntryBySlug)

// Caches the global document fetching using React cache
export const getGlobalCached = cache(getGlobal)

// Caches the collection document fetching using React cache
export const getCollectionCached = cache(getCollection)
