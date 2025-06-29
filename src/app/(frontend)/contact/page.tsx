import React from 'react'
import { notFound } from 'next/navigation'
import { PageSearchParams } from '@/types/app'
import { checkAuthorizedPreview } from '@/utilities/payload/preview'
import { getGlobal } from '@/utilities/payload/globals'
import { getGlobalCached } from '@/utilities/payload/cached'
import { withFallbackSEO } from '@/utilities/SEO/withFallbackSEO'
import { LivePreviewListener } from '@/ui/LivePreviewListener'
import { ContactPage } from '@/ui/pages/ContactPage'

export default async function Contact({ searchParams }: PageSearchParams) {
  const resolvedSearchParams = await searchParams
  const isPreview = resolvedSearchParams.preview === 'true'
  const isAuthorizedPreview = checkAuthorizedPreview(resolvedSearchParams, '/contact')

  if (isPreview && !isAuthorizedPreview) {
    console.warn('Tentative de preview non autorisée sur /contact.')
    return notFound()
  }

  const aboutPage = isAuthorizedPreview
    ? await getGlobal('contact', 1, true)
    : await getGlobalCached('contact', 1)

  if (!aboutPage) return notFound()

  return (
    <>
      {isAuthorizedPreview && <LivePreviewListener />}
      <ContactPage data={aboutPage} />
    </>
  )
}

export async function generateMetadata() {
  const data = await getGlobalCached('contact', 1)
  return withFallbackSEO(data)
}
