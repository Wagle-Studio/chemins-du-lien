import React from 'react'
import { About } from '@/payload-types'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { HeroPage } from '@/ui/layout/hero-page/HeroPage'

type Props = {
  data: About
}

export const AboutPage = async ({ data }: Props) => {
  return (
    <>
      <HeroPage data={data} />
      <RenderBlocks blocks={data.blocks} />
    </>
  )
}
