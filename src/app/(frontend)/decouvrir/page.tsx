import React from 'react'
import { notFound } from 'next/navigation'
import { checkAuthorizedPreview } from '@/utilities/payload/preview'
import { getGlobal } from '@/utilities/payload/globals'
import { getGlobalCached } from '@/utilities/payload/cached'
import { LivePreviewListener } from '@/ui/LivePreviewListener'
import { DiscoverPage } from '@/ui/pages/DiscoverPage'

export default async function Discover({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const params = await searchParams

  const isPreview = searchParams.preview === 'true'
  const isAuthorizedPreview = checkAuthorizedPreview(params, '/decouvrir')

  if (isPreview && !isAuthorizedPreview) {
    console.warn('Tentative de preview non autorisée sur /decouvrir.')
    return notFound()
  }

  const discoverPage = isAuthorizedPreview
    ? await getGlobal('discover', 1, true)
    : await getGlobalCached('discover', 1)

  if (!discoverPage) return notFound()

  return (
    <>
      {isAuthorizedPreview && <LivePreviewListener />}
      <DiscoverPage data={discoverPage} />
    </>
  )
}