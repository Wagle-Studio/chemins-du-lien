import React from 'react'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { getGlobal } from '@/utilities/payload/globals'
import { getGlobalCached } from '@/utilities/payload/cached'
import { LivePreviewListener } from '@/ui/LivePreviewListener'
import { HomePage } from '@/ui/pages/Homepage'

export default async function Home() {
  const { isEnabled: isDraft } = await draftMode()

  const homepage = isDraft ? await getGlobal('homepage', 1) : await getGlobalCached('homepage', 1)

  if (!homepage) return notFound()

  return (
    <>
      {isDraft && <LivePreviewListener />}
      <HomePage data={homepage} />
    </>
  )
}
