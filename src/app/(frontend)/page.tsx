import React from 'react'
import { notFound } from 'next/navigation'
import { checkAuthorizedPreview } from '@/utilities/payload/preview'
import { getGlobal } from '@/utilities/payload/globals'
import { getGlobalCached } from '@/utilities/payload/cached'
import { LivePreviewListener } from '@/ui/LivePreviewListener'
import { HomePage } from '@/ui/pages/Homepage'

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const params = await searchParams

  const isPreview = searchParams.preview === 'true'
  const isAuthorizedPreview = checkAuthorizedPreview(params, '/')

  if (isPreview && !isAuthorizedPreview) {
    console.warn("Tentative de preview non autorisée sur la page d'accueil.")
    return notFound()
  }

  const homepage = isAuthorizedPreview
    ? await getGlobal('homepage', 1, true)
    : await getGlobalCached('homepage', 1)

  if (!homepage) return notFound()

  return (
    <>
      {isAuthorizedPreview && <LivePreviewListener />}
      <HomePage data={homepage} />
    </>
  )
}
