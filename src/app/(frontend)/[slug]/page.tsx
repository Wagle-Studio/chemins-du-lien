import React from 'react'
import { notFound } from 'next/navigation'
import { PageParams } from '@/types/app'
import { getEntryBySlugCached, getStaticParamsFromSlugs } from '@/utilities/payload-utils'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { type RequiredDataFromCollectionSlug } from 'payload'

type Args = PageParams<'slug'>

export default async function Page({ params: paramsPromise }: Args) {
  const { slug } = await paramsPromise

  const page: RequiredDataFromCollectionSlug<'pages'> | null = await getEntryBySlugCached(
    'pages',
    slug ?? '',
  )

  if (!page) return notFound()

  return <RenderBlocks blocks={page.blocks} />
}

export async function generateStaticParams() {
  return getStaticParamsFromSlugs('pages')
}
