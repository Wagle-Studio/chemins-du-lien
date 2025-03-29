import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Homepage } from '@/payload-types'

type GlobalSlugToType = {
  homepage: Homepage
}

type GlobalSlug = keyof GlobalSlugToType

export const getGlobal = async <Tslug extends GlobalSlug>(
  slug: Tslug,
  depth = 0,
): Promise<GlobalSlugToType[Tslug]> => {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.findGlobal({ slug, depth })

  return result as GlobalSlugToType[Tslug]
}
