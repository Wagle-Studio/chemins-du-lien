import React from 'react'
import { getGlobal } from '@/utilities/payload/globals'
import { RenderBlocks } from '@/blocks/RenderBlocks'

export async function Process() {
  const data = await getGlobal('process', 1)

  return (
    <>
      <RenderBlocks blocks={data.blocks} />
    </>
  )
}
