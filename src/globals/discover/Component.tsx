// TODO : Extract layout when implementing dynamic collection detail pages.

import React from 'react'
import { getGlobal } from '@/utilities/payload/globals'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { HeroPage } from '@/ui/layout/hero-page/HeroPage'

export async function Discover() {
  const data = await getGlobal('discover', 1)

  return (
    <>
      <HeroPage data={data} />
      <RenderBlocks blocks={data.blocks} />
    </>
  )
}
