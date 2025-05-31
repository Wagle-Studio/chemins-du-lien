import React from 'react'
import { notFound } from 'next/navigation'
import { PageSearchParams } from '@/types/app'
import { checkAuthorizedPreview } from '@/utilities/payload/preview'
import { getGlobal } from '@/utilities/payload/globals'
import { getGlobalCached } from '@/utilities/payload/cached'
import { LivePreviewListener } from '@/ui/LivePreviewListener'
import { ProcessPage } from '@/ui/pages/ProcessPage'

export default async function Process({ searchParams }: PageSearchParams) {
  const resolvedSearchParams = await searchParams
  const isPreview = resolvedSearchParams.preview === 'true'
  const isAuthorizedPreview = checkAuthorizedPreview(resolvedSearchParams, '/processus')

  if (isPreview && !isAuthorizedPreview) {
    console.warn('Tentative de preview non autorisée sur /processus.')
    return notFound()
  }

  const processPage = isAuthorizedPreview
    ? await getGlobal('process', 1, true)
    : await getGlobalCached('process', 1)

  if (!processPage) return notFound()

  return (
    <>
      {isAuthorizedPreview && <LivePreviewListener />}
      <ProcessPage data={processPage} />
    </>
  )
}
