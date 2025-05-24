'use client'

import './style.scss'
import clsx from 'clsx'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { RichText as ConvertRichText } from '@payloadcms/richtext-lexical/react'
import { AllBlocks, ExtractBlock } from '@/types/blocks'

gsap.registerPlugin(ScrollTrigger)

type Props = {
  data: ExtractBlock<AllBlocks, 'page_hero_banner'>
}

export const PageHeroBannerBlock: React.FC<Props> = ({ data }) => {
  return (
    <section className={clsx('page_hero_banner_block')}>
      <div className="page_hero_banner_block__wrapper">
        <div className="page_hero_banner_block__wrapper__content">
          <h1 className="heading_1">{data.title}</h1>
          <div>
            <ConvertRichText data={data.description} />
          </div>
        </div>
      </div>
    </section>
  )
}
