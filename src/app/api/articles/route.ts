import { NextResponse } from 'next/server'
import { Where } from 'payload'
import { getCollectionWithParams } from '@/utilities/payload-utils'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)

    const rawFilters: Record<string, RawFilterValue> = {
      'categories.slug': {
        operator: 'equals',
        value: searchParams.get('category') ?? undefined,
      },
    }

    const where = buildWhereFromFilters(rawFilters)

    const articles = await getCollectionWithParams('articles', {
      depth: 2,
      sort: 'createdAt',
      where,
    })

    return NextResponse.json(articles)
  } catch (error) {
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de la récupération des articles.' },
      { status: 500 },
    )
  }
}

type FilterOperator =
  | 'equals'
  | 'not_equals'
  | 'in'
  | 'not_in'
  | 'like'
  | 'contains'
  | 'greater_than'
  | 'less_than'
  | 'greater_than_equal'
  | 'less_than_equal'

type RawFilterValue = {
  operator: FilterOperator
  value?: string | string[]
}

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
