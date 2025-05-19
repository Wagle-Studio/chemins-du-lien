import './style.scss'
import React from 'react'
import { getGlobal } from '@/utilities/payload/globals'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { Header } from '@/ui/header/Header.client'
import type { Homepage } from '@/payload-types'

export async function Homepage() {
  const data = await getGlobal('homepage', 1)

  return (
    <div className="homepage_layout">
      <div className="homepage_layout__heading">
        <div className="homepage_layout__heading__overlay">
          <Header />
        </div>
      </div>
      <RenderBlocks blocks={data.blocks} />
    </div>
  )
}
