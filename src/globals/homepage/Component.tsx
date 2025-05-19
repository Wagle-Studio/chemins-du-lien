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
            <h1 className="homepage_layout__heading__overlay__content__title">
              Chemins du lien <br />{' '}
              <span className="homepage_layout__heading__overlay__content__title__sub">
                de soi à l'autre
              </span>
            </h1>
            <div className="homepage_layout__heading__overlay__content__cta">
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
      <RenderBlocks blocks={data.blocks} />
    </div>
  )
}
