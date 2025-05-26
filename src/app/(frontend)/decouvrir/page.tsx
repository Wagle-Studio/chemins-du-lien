import React from 'react'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { getGlobal } from '@/utilities/payload/globals'
import { getGlobalCached } from '@/utilities/payload/cached'
import { LivePreviewListener } from '@/ui/LivePreviewListener'
import { DiscoverPage } from '@/ui/pages/DiscoverPage'

export default async function Discover() {
  const { isEnabled: isDraft } = await draftMode()

  const discoverPage = isDraft
    ? await getGlobal('discover', 1)
    : await getGlobalCached('discover', 1)

  if (!discoverPage) return notFound()

  return (
    <>
      {isDraft && <LivePreviewListener />}
      <DiscoverPage data={discoverPage} />
    </>
  )
}
