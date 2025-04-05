import React from 'react'
import { getGlobal } from '@/utilities/payload-utils'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import type { Homepage } from '@/payload-types'

export async function Homepage() {
  const data = await getGlobal('homepage', 1)

  return (
    <div className="homepage_layout">
      <RenderBlocks blocks={data.blocks} />
    </div>
  )
}
