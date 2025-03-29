import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Cursus, Exercice } from '@/payload-types'

type CollectionSlugToType = {
  cursus: Cursus
  exercices: Exercice
}

type CollectionSlug = keyof CollectionSlugToType

export const getCollection = async <TSlug extends CollectionSlug>(
  slug: TSlug,
  depth = 0,
): Promise<CollectionSlugToType[TSlug][]> => {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: slug,
    depth,
  })

  return result.docs as CollectionSlugToType[TSlug][]
}
