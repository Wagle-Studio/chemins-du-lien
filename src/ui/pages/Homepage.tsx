import React from 'react'
import { Homepage } from '@/payload-types'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { HeroHomepage } from '@/ui/layout/hero-homepage/HeroHomepage'

type Props = {
  data: Homepage
}

export const HomePage = async ({ data }: Props) => {
  return (
    <>
      <HeroHomepage data={data} />
      <RenderBlocks blocks={data.blocks} />
    </>
  )
}
