import React from 'react'
import { notFound } from 'next/navigation'
import { PageSearchParams } from '@/types/app'
import { checkAuthorizedPreview } from '@/utilities/payload/preview'
import { getGlobal } from '@/utilities/payload/globals'
import { getGlobalCached } from '@/utilities/payload/cached'
import { LivePreviewListener } from '@/ui/LivePreviewListener'
import { HomePage } from '@/ui/pages/Homepage'

export default async function Home({ searchParams }: PageSearchParams) {
  const resolvedSearchParams = await searchParams
  const isPreview = resolvedSearchParams.preview === 'true'
  const isAuthorizedPreview = checkAuthorizedPreview(resolvedSearchParams, '/')

  if (isPreview && !isAuthorizedPreview) {
    console.warn("Tentative de preview non autorisée sur la page d'accueil.")
    return notFound()
  }

  const homepage = isAuthorizedPreview
    ? await getGlobal('homepage', 1, true)
    : await getGlobalCached('homepage', 1)

  if (!homepage) return notFound()

  return (
    <>
      {isAuthorizedPreview && <LivePreviewListener />}
      <HomePage data={homepage} />
    </>
  )
}
