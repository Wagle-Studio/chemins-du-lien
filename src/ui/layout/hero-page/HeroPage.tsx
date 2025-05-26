'use client'

import './hero-page.scss'
import { useRef } from 'react'
import { RichText as ConvertRichText } from '@payloadcms/richtext-lexical/react'
import { About, Discover } from '@/payload-types'
import { useHeroPageAnimation } from './useHeroPageAnimation'

type Props = {
  data: Discover | About
}

export const HeroPage: React.FC<Props> = ({ data, ...props }) => {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const introductionRef = useRef<HTMLHeadingElement>(null)

  useHeroPageAnimation(sectionRef, headingRef, introductionRef)

  return (
    <section id="top" ref={sectionRef} className="page_hero_banner_block" {...props}>
      <div className="page_hero_banner_block__wrapper">
        <div className="page_hero_banner_block__wrapper__content">
          <h1 ref={headingRef} className="heading_1">
            {data.title}
          </h1>
          <div ref={introductionRef}>
            <ConvertRichText data={data.introduction} />
          </div>
        </div>
      </div>
    </section>
  )
}
