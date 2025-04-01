import React from 'react'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { type RequiredDataFromCollectionSlug } from 'payload'
import { ArticleParams } from '@/types/app'
import {
  getEntryBySlug,
  getEntryBySlugCached,
  getStaticParamsFromSlugs,
} from '@/utilities/payload-utils'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { LivePreviewListener } from '@/ui/LivePreviewListener'

type Args = ArticleParams<'slug'>

export default async function Article({ params: paramsPromise }: Args) {
  const { slug } = await paramsPromise
  const { isEnabled: isDraft } = await draftMode()

  const getArticle = isDraft ? getEntryBySlug : getEntryBySlugCached

  const articles: RequiredDataFromCollectionSlug<'articles'> | null = await getArticle(
    'articles',
    slug ?? '',
  )

  if (!articles) return notFound()

  return (
    <>
      {isDraft && <LivePreviewListener />}
      <RenderBlocks blocks={articles.blocks} />
    </>
  )
}

export async function generateStaticParams() {
  return getStaticParamsFromSlugs('articles')
}
