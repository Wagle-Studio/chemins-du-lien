import './style.scss'
import React from 'react'
import { getGlobal } from '@/utilities/payload/globals'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { Link } from '@/ui/link/Link'
import type { Homepage } from '@/payload-types'

export async function Homepage() {
  const data = await getGlobal('homepage', 1)

  return (
    <div className="homepage_layout">
      <div className="homepage_layout__heading">
        <div className="homepage_layout__heading__overlay">
          <div className="homepage_layout__heading__overlay__content">
            <div className="homepage_layout__heading__overlay__content__wrapper">
              <div className="homepage_layout__heading__overlay__content__wrapper__title">
                <p className="heading_1">Chemins du lien</p>
                <p className="heading_3">de soi à l'autre</p>
              </div>
              <div className="homepage_layout__heading__overlay__content__wrapper__cta">
                <Link href="/" variant="primary">
                  Découvrir le processus
                </Link>
                <Link href="/" variant="ghost">
                  Nos ateliers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RenderBlocks blocks={data.blocks} />
    </div>
  )
}
