import { cache } from 'react'
import { getEntryBySlug } from './collections'
import { getGlobal } from './globals'

// Caches the entry-by-slug query using React cache
export const getEntryBySlugCached = cache(getEntryBySlug)

// Caches the global document fetching using React cache
export const getGlobalCached = cache(getGlobal)
