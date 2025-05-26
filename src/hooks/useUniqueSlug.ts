import { APIError, CollectionBeforeChangeHook } from 'payload'
import slugify from 'slugify'

export const useUniqueSlug: CollectionBeforeChangeHook = async ({
  data,
  originalDoc,
  operation,
  req,
  collection,
}) => {
  if ((operation !== 'create' && operation !== 'update') || !data?.title) {
    return data
  }

  const title = data.title.trim()
  const slug = slugify(title, { lower: true, strict: true })

  if (originalDoc && originalDoc.title === title && originalDoc.slug === slug) {
    return data
  }

  const existing = await req.payload.find({
    collection: collection.slug,
    where: {
      slug: {
        equals: slug,
      },
    },
    depth: 0,
    limit: 1,
  })

  const doc = existing.docs[0]
  const isDuplicate = doc && doc.id !== originalDoc?.id

  if (isDuplicate) {
    throw new APIError(`Un(e) ${collection.slug} avec ce titre existe déjà`, 400)
  }

  return {
    ...data,
    slug,
  }
}
