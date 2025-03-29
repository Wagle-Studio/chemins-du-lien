import React from 'react'
import { PageParams } from '@/types/app'
import { getEntryBySlugCached, getStaticParamsFromSlugs } from '@/utilities/payload-utils'
import { Exercice } from '@/ui/didacticiel/exercice/Exercice'
import { type RequiredDataFromCollectionSlug } from 'payload'

type Args = PageParams<'exercice_slug'>

export default async function ExercicePage({ params: paramsPromise }: Args) {
  const { exercice_slug } = await paramsPromise

  const exercice: RequiredDataFromCollectionSlug<'exercices'> | null = await getEntryBySlugCached(
    'exercices',
    exercice_slug ?? '',
  )

  // TODO: handle more properly.
  if (!exercice) {
    return <div>Exercice introuvable</div>
  }

  return <Exercice exercice={exercice} />
}

export async function generateStaticParams() {
  return getStaticParamsFromSlugs('exercices')
}
