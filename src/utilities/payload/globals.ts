import { getPayloadClient } from './client'
import { GlobalSlug, GlobalSlugToType } from '@/types/slug'

// Finds a global document by slug
export const getGlobal = async <TSlug extends GlobalSlug>(
  slug: TSlug,
  depth = 0,
  preview = false,
): Promise<GlobalSlugToType[TSlug]> => {
  const payload = await getPayloadClient()

  const result = await payload.findGlobal({
    slug,
    depth,
    draft: preview,
    overrideAccess: preview,
  })

  return result as GlobalSlugToType[TSlug]
}
