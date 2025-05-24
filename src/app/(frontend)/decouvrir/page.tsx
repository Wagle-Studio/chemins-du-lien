import React from 'react'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { Process } from '@/globals/process/Component'
import { getGlobal } from '@/utilities/payload/globals'
import { getGlobalCached } from '@/utilities/payload/cached'
import { LivePreviewListener } from '@/ui/LivePreviewListener'

export default async function ProcessPage() {
  const { isEnabled: isDraft } = await draftMode()

  const processPage = isDraft ? await getGlobal('process', 1) : await getGlobalCached('process', 1)

  if (!processPage) return notFound()

  return (
    <>
      {isDraft && <LivePreviewListener />}
      <Process />
    </>
  )
}
