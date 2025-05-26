import React from 'react'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { getGlobal } from '@/utilities/payload/globals'
import { getGlobalCached } from '@/utilities/payload/cached'
import { LivePreviewListener } from '@/ui/LivePreviewListener'
import { AboutPage } from '@/ui/pages/AboutPage'

export default async function About() {
  const { isEnabled: isDraft } = await draftMode()

  const aboutPage = isDraft ? await getGlobal('about', 1) : await getGlobalCached('about', 1)

  if (!aboutPage) return notFound()

  return (
    <>
      {isDraft && <LivePreviewListener />}
      <AboutPage data={aboutPage} />
    </>
  )
}
