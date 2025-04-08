import { NextResponse } from 'next/server'
import { RawFilterValue } from '@/types/filters'
import { buildWhereFromFilters } from '@/utilities/payload/utils'
import { getCollectionWithParams } from '@/utilities/payload/collections'

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

    const events = await getCollectionWithParams('events', {
      depth: 2,
      sort: 'date',
      where,
    })

    return NextResponse.json(events)
  } catch (error) {
    console.log(error)
    return NextResponse.json({ status: 500 })
  }
}
