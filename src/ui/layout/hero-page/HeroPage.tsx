'use client'

import './hero-page.scss'
import { useRef } from 'react'
import { RichText as ConvertRichText } from '@payloadcms/richtext-lexical/react'
import { Contact, Discover, Process } from '@/payload-types'
import { useHeroPageAnimation } from './useHeroPageAnimation'

type Props = {
  data: Discover | Contact | Process
}

export const HeroPage: React.FC<Props> = ({ data, ...props }) => {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const introductionRef = useRef<HTMLHeadingElement>(null)

  const banner = data.banner && typeof data.banner !== 'number' ? data.banner : null

  useHeroPageAnimation(sectionRef, headingRef, introductionRef)

  return (
    <section
      id="top"
      ref={sectionRef}
      className="page_hero_banner_block"
      style={banner?.url ? { background: `url(${banner.url}) center/cover no-repeat` } : undefined}
      {...props}
    >
      <div className="page_hero_banner_block__wrapper">
        <div className="page_hero_banner_block__wrapper__content">
          <h1 ref={headingRef} className="heading_1">
            {data.title}
          </h1>
          {'introduction' in data && data.introduction && (
            <div ref={introductionRef}>
              <ConvertRichText data={data.introduction} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
