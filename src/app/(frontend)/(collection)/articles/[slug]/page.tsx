import React from 'react'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { PageParams } from '@/types/app'
import { getEntryBySlugCached } from '@/utilities/payload/cached'
import { getEntryBySlug, getStaticParamsFromSlugs } from '@/utilities/payload/collections'
import { LivePreviewListener } from '@/ui/LivePreviewListener'
import { Article } from '@/ui/article/Article'
import { type RequiredDataFromCollectionSlug } from 'payload'

type Args = PageParams<'slug'>

export default async function ArticlePage({ params: paramsPromise }: Args) {
  const { slug } = await paramsPromise
  const { isEnabled: isDraft } = await draftMode()

  const getArticle = isDraft ? getEntryBySlug : getEntryBySlugCached

  const article: RequiredDataFromCollectionSlug<'articles'> | null = await getArticle(
    'articles',
    slug ?? '',
  )

  if (!article) return notFound()

  return (
    <Article article={article}>
      {isDraft && <LivePreviewListener />}
      <RenderBlocks blocks={article.blocks} />
    </Article>
  )
}

export async function generateStaticParams() {
  return getStaticParamsFromSlugs('articles')
}
