import React from 'react'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { getCollection } from '@/utilities/payload/collections'
import { getCollectionCached } from '@/utilities/payload/cached'
import { StaticMeta, withFallbackSEO } from '@/utilities/SEO/withFallbackSEO'
import { WorkshopsPage } from '@/ui/pages/WorkshopsPage'

export const dynamic = 'force-dynamic'

export default async function Workshops() {
  const { isEnabled: isDraft } = await draftMode()

  const categories = isDraft
    ? await getCollection('categories', 1)
    : await getCollectionCached('categories', 1)

  if (!categories) return notFound()

  return (
    <>
      <WorkshopsPage data={categories} />
    </>
  )
}

const meta: StaticMeta = {
  metaTitle: 'Nos ateliers – Explorer la posture relationnelle',
  metaDescription:
    'Découvrez nos ateliers pour expérimenter des outils de dialogue, développer l’écoute active et améliorer vos relations.',
  noIndex: false,
}

export async function generateMetadata() {
  return withFallbackSEO(meta)
}
