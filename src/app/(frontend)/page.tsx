import React from 'react'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { Homepage } from '@/globals/homepage/Component'
import { getGlobal } from '@/utilities/payload/globals'
import { getGlobalCached } from '@/utilities/payload/cached'
import { LivePreviewListener } from '@/ui/LivePreviewListener'

export default async function HomePage() {
  const { isEnabled: isDraft } = await draftMode()

  const homepage = isDraft ? await getGlobal('homepage', 1) : await getGlobalCached('homepage', 1)

  if (!homepage) return notFound()

  return (
    <>
      {isDraft && <LivePreviewListener />}
      <Homepage />
    </>
  )
}
