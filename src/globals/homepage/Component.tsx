import React from 'react'
import { getGlobal } from '@/utilities/getGlobal'
import type { Homepage } from '@/payload-types'
import { RenderBlocks } from '@/blocks/RenderBlocks'

export async function Homepage() {
  const data = await getGlobal('homepage', 1)

  return <RenderBlocks blocks={data.blocks} />
}
