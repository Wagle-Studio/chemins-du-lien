import { Where } from 'payload'
import { Cursus } from '@/payload-types'
import { RawFilterValue } from '@/types/filters'

// TODO: update typing
// Constructs a Payload `where` clause from filter values
export const buildWhereFromFilters = (
  filters: Record<string, RawFilterValue>,
): Where | undefined => {
  const where: Record<string, any> = {}

  Object.entries(filters).forEach(([key, { operator, value }]) => {
    if (
      (typeof value === 'string' && value.length > 0) ||
      (Array.isArray(value) && value.length > 0)
    ) {
      where[key] = { [operator]: value }
    }
  })

  return Object.keys(where).length > 0 ? where : undefined
}

// Extracts all exercice slugs from a cursus document
export const getExerciceSlugsFromCursus = (cursus: Cursus): string[] => {
  if (!('exercices' in cursus)) return []
  return (
    (cursus.exercices as Array<{ slug?: string } | number>)
      ?.filter((ex): ex is { slug: string } => typeof ex === 'object' && !!ex.slug)
      ?.map((ex) => ex.slug) ?? []
  )
}
