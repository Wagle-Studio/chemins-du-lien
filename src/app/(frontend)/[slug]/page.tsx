import React from 'react'
import { type RequiredDataFromCollectionSlug } from 'payload'
import { PageParams } from '@/types/app'
import { getEntryBySlugCached, getStaticParamsFromSlugs } from '@/utilities/payload-utils'
import { RenderBlocks } from '@/blocks/RenderBlocks'

type Args = PageParams<'slug'>

export default async function Page({ params: paramsPromise }: Args) {
  const { slug } = await paramsPromise

  const page: RequiredDataFromCollectionSlug<'pages'> | null = await getEntryBySlugCached(
    'pages',
    slug ?? '',
  )

  if (!page) {
    // TODO: handle redirect or 404 properly
    return <div>Page introuvable</div>
  }

  return <RenderBlocks blocks={page.blocks} />
}

export async function generateStaticParams() {
  return getStaticParamsFromSlugs('pages')
}
