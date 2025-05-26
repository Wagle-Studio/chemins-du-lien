import React from 'react'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { Discover } from '@/globals/discover/Component'
import { getGlobal } from '@/utilities/payload/globals'
import { getGlobalCached } from '@/utilities/payload/cached'
import { LivePreviewListener } from '@/ui/LivePreviewListener'

export default async function ProcessPage() {
  const { isEnabled: isDraft } = await draftMode()

  const processPage = isDraft
    ? await getGlobal('discover', 1)
    : await getGlobalCached('discover', 1)

  if (!processPage) return notFound()

  return (
    <>
      {isDraft && <LivePreviewListener />}
      <Discover />
    </>
  )
}
