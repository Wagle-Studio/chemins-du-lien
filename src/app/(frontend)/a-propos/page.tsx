import React from 'react'
import { notFound } from 'next/navigation'
import { PageSearchParams } from '@/types/app'
import { checkAuthorizedPreview } from '@/utilities/payload/preview'
import { getGlobal } from '@/utilities/payload/globals'
import { getGlobalCached } from '@/utilities/payload/cached'
import { LivePreviewListener } from '@/ui/LivePreviewListener'
import { AboutPage } from '@/ui/pages/AboutPage'

export default async function About({ searchParams }: PageSearchParams) {
  const resolvedSearchParams = await searchParams
  const isPreview = resolvedSearchParams.preview === 'true'
  const isAuthorizedPreview = checkAuthorizedPreview(resolvedSearchParams, '/a-propos')

  if (isPreview && !isAuthorizedPreview) {
    console.warn('Tentative de preview non autorisée sur /a-propos.')
    return notFound()
  }

  const aboutPage = isAuthorizedPreview
    ? await getGlobal('about', 1, true)
    : await getGlobalCached('about', 1)

  if (!aboutPage) return notFound()

  return (
    <>
      {isAuthorizedPreview && <LivePreviewListener />}
      <AboutPage data={aboutPage} />
    </>
  )
}
