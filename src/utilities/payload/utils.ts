import { RawFilterValue } from '@/types/api'
import { Where } from 'payload'

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
