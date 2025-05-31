import React from 'react'
import { notFound } from 'next/navigation'
import { checkAuthorizedPreview } from '@/utilities/payload/preview'
import { getGlobal } from '@/utilities/payload/globals'
import { getGlobalCached } from '@/utilities/payload/cached'
import { LivePreviewListener } from '@/ui/LivePreviewListener'
import { ProcessPage } from '@/ui/pages/ProcessPage'

export default async function Process({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const params = await searchParams

  const isPreview = searchParams.preview === 'true'
  const isAuthorizedPreview = checkAuthorizedPreview(params, '/processus')

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
