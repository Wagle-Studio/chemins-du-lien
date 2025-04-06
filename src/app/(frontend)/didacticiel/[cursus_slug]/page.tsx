import React from 'react'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { type RequiredDataFromCollectionSlug } from 'payload'
import { PageParams } from '@/types/app'
import { getEntryBySlug, getStaticParamsFromSlugs } from '@/utilities/payload/collections'
import { getEntryBySlugCached } from '@/utilities/payload/cached'
import { Cursus } from '@/ui/didacticiel/cursus/Cursus'
import { LivePreviewListener } from '@/ui/LivePreviewListener'

type Args = PageParams<'cursus_slug'>

export default async function CursusPage({ params: paramsPromise }: Args) {
  const { cursus_slug } = await paramsPromise
  const { isEnabled: isDraft } = await draftMode()

  const getPage = isDraft ? getEntryBySlug : getEntryBySlugCached

  const cursus: RequiredDataFromCollectionSlug<'cursus'> | null = await getPage(
    'cursus',
    cursus_slug ?? '',
  )

  if (!cursus) return notFound()

  return (
    <>
      {isDraft && <LivePreviewListener />}
      <Cursus cursus={cursus} />
    </>
  )
}

export async function generateStaticParams() {
  return getStaticParamsFromSlugs('cursus')
}
