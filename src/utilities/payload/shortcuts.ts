import { Cursus } from '@/payload-types'
import { getPayloadClient } from './client'

// Extracts all exercice slugs from a cursus document
export const getExerciceSlugsFromCursus = (cursus: Cursus): string[] => {
  if (!('exercices' in cursus)) return []
  return (
    (cursus.exercices as Array<{ slug?: string } | number>)
      ?.filter((ex): ex is { slug: string } => typeof ex === 'object' && !!ex.slug)
      ?.map((ex) => ex.slug) ?? []
  )
}

// Fetches the 3 latest future events
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

// Fetches the 3 most recent articles
export const getLatestArticles = async (): Promise<any[]> => {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'articles',
    limit: 3,
    sort: 'createdAt',
  })
  return result.docs
}
