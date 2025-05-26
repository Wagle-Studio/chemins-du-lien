import React from 'react'
import { Discover } from '@/payload-types'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { HeroPage } from '@/ui/layout/hero-page/HeroPage'

type Props = {
  data: Discover
}

export const DiscoverPage = async ({ data }: Props) => {
  return (
    <>
      <HeroPage data={data} />
      <RenderBlocks blocks={data.blocks} />
    </>
  )
}
