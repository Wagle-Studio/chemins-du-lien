import React from 'react'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { type RequiredDataFromCollectionSlug } from 'payload'
import { PageParams } from '@/types/app'
import {
  getEntryBySlug,
  getEntryBySlugCached,
  getStaticParamsFromSlugs,
} from '@/utilities/payload-utils'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { LivePreviewListener } from '@/ui/LivePreviewListener'

type Args = PageParams<'slug'>

export default async function Page({ params: paramsPromise }: Args) {
  const { slug } = await paramsPromise
  const { isEnabled: isDraft } = await draftMode()

  const getPage = isDraft ? getEntryBySlug : getEntryBySlugCached

  const page: RequiredDataFromCollectionSlug<'pages'> | null = await getPage('pages', slug ?? '')

  if (!page) return notFound()

  return (
    <>
      {isDraft && <LivePreviewListener />}
      <RenderBlocks blocks={page.blocks} />
    </>
  )
}

export async function generateStaticParams() {
  return getStaticParamsFromSlugs('pages')
}
