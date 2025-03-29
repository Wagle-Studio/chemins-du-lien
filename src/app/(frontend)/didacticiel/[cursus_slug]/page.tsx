import React from 'react'
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

  // TODO: handle more properly.
  if (!cursus) {
    return <div>Cursus introuvable</div>
  }

  return <Cursus cursus={cursus} />
}

export async function generateStaticParams() {
  return getStaticParamsFromSlugs('cursus')
}
