import { GlobalSlug, GlobalSlugToType } from '@/types/slug'
import { getPayloadClient } from './client'

// Finds a global document by slug
export const getGlobal = async <TSlug extends GlobalSlug>(
  slug: TSlug,
  depth = 0,
): Promise<GlobalSlugToType[TSlug]> => {
  const payload = await getPayloadClient()
  const result = await payload.findGlobal({ slug, depth })
  return result as GlobalSlugToType[TSlug]
}
