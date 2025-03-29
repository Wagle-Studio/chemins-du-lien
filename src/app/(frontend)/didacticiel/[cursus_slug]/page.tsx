import React from 'react'
import { notFound } from 'next/navigation'
import { PageParams } from '@/types/app'
import { getEntryBySlugCached, getStaticParamsFromSlugs } from '@/utilities/payload-utils'
import { Cursus } from '@/ui/didacticiel/cursus/Cursus'
import { type RequiredDataFromCollectionSlug } from 'payload'

type Args = PageParams<'cursus_slug'>

export default async function CursusPage({ params: paramsPromise }: Args) {
  const { cursus_slug } = await paramsPromise

  const cursus: RequiredDataFromCollectionSlug<'cursus'> | null = await getEntryBySlugCached(
    'cursus',
    cursus_slug ?? '',
  )

  if (!cursus) return notFound()

  return <Cursus cursus={cursus} />
}

export async function generateStaticParams() {
  return getStaticParamsFromSlugs('cursus')
}
