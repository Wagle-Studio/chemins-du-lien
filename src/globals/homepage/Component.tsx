import React from 'react'
import { getGlobal } from '@/utilities/payload/globals'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import type { Homepage } from '@/payload-types'
import { HomepageHero } from '@/ui/homepage-hero/HomepageHero'

export async function Homepage() {
  const data = await getGlobal('homepage', 1)

  return (
    <>
      <HomepageHero />
      <RenderBlocks blocks={data.blocks} />
    </>
  )
}
