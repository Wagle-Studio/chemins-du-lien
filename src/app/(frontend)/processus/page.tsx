import React from 'react'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { getGlobal } from '@/utilities/payload/globals'
import { getGlobalCached } from '@/utilities/payload/cached'
import { LivePreviewListener } from '@/ui/LivePreviewListener'
import { AboutPage } from '@/ui/pages/AboutPage'

export default async function Process() {
  const { isEnabled: isDraft } = await draftMode()

  const processPage = isDraft ? await getGlobal('process', 1) : await getGlobalCached('process', 1)

  if (!processPage) return notFound()

  return (
    <>
      {isDraft && <LivePreviewListener />}
      <AboutPage data={processPage} />
    </>
  )
}
