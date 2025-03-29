import React from 'react'
import type { Homepage } from '@/payload-types'
import { getGlobal } from '@/utilities/payload-utils'
import { RenderBlocks } from '@/blocks/RenderBlocks'

export async function Homepage() {
  const data = await getGlobal('homepage', 1)

  return <RenderBlocks blocks={data.blocks} />
}
