import React from 'react'
import { Process } from '@/payload-types'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { HeroPage } from '@/ui/layout/hero-page/HeroPage'

type Props = {
  data: Process
}

export const ProcessPage = async ({ data }: Props) => {
  return (
    <>
      <HeroPage data={data} />
      <RenderBlocks blocks={data.blocks} />
    </>
  )
}
