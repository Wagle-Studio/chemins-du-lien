import React from 'react'
import { Contact } from '@/payload-types'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { HeroPage } from '@/ui/layout/hero-page/HeroPage'

type Props = {
  data: Contact
}

export const ContactPage = async ({ data }: Props) => {
  return (
    <>
      <HeroPage data={data} />
      <RenderBlocks blocks={data.blocks} />
    </>
  )
}
