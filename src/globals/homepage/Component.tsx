// TODO : Extract layout when implementing dynamic collection detail pages.

import React from 'react'
import { getGlobal } from '@/utilities/payload/globals'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { HeroHomepage } from '@/ui/layout/hero-homepage/HeroHomepage'

export async function Homepage() {
  const data = await getGlobal('homepage', 1)

  return (
    <>
      <HeroHomepage data={data} />
      <RenderBlocks blocks={data.blocks} />
    </>
  )
}
