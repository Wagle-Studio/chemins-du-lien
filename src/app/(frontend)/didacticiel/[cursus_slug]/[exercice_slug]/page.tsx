import React from 'react'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { type RequiredDataFromCollectionSlug } from 'payload'
import { PageParams } from '@/types/app'
import { getEntryBySlugCached } from '@/utilities/payload/cached'
import { getEntryBySlug, getStaticParamsFromSlugs } from '@/utilities/payload/collections'
import { Exercice } from '@/ui/didacticiel/exercice/Exercice'
import { LivePreviewListener } from '@/ui/LivePreviewListener'

type Args = PageParams<'exercice_slug'>

export default async function ExercicePage({ params: paramsPromise }: Args) {
  const { exercice_slug } = await paramsPromise
  const { isEnabled: isDraft } = await draftMode()

  const getPage = isDraft ? getEntryBySlug : getEntryBySlugCached

  const exercice: RequiredDataFromCollectionSlug<'exercices'> | null = await getPage(
    'exercices',
    exercice_slug ?? '',
  )

  if (!exercice) return notFound()

  return (
    <>
      {isDraft && <LivePreviewListener />}
      <Exercice exercice={exercice} />
    </>
  )
}

export async function generateStaticParams() {
  return getStaticParamsFromSlugs('exercices')
}
