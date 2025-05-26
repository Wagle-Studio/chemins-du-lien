'use client'

import './hero-homepage.scss'

import { useRef } from 'react'
import { Homepage } from '@/payload-types'
import { Link } from '@/ui/atoms/link/Link'
import { useHeroHomepageAnimation } from './useHeroHomepageAnimation'

type Props = {
  data: Homepage
}

export const HeroHomepage: React.FC<Props> = ({ data, ...props }) => {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  const banner = data.banner && typeof data.banner !== 'number' ? data.banner : null

  useHeroHomepageAnimation(heroRef, titleRef, ctaRef)

  return (
    <section
      id="homepage__hero_banner"
      ref={heroRef}
      className="homepage__hero_banner"
      style={{ background: `url(${banner?.url}) center/cover no-repeat` }}
      {...props}
    >
      <div className="homepage__hero_banner__overlay">
        <div className="homepage__hero_banner__overlay__content">
          <div className="homepage__hero_banner__overlay__content__wrapper">
            <div ref={titleRef} className="homepage__hero_banner__overlay__content__wrapper__title">
              <p className="heading_1">Chemins du lien</p>
              <p className="heading_3">de soi à l&apos;autre</p>
            </div>
            <div ref={ctaRef} className="homepage__hero_banner__overlay__content__wrapper__cta">
              <Link href="/decouvrir" variant="primary" internalLink>
                Découvrir le processus
              </Link>
              <Link href="/ateliers" variant="ghost" internalLink>
                Nos ateliers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
