'use client'

import './introduction.scss'

import { useRef } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { RichText as ConvertRichText } from '@payloadcms/richtext-lexical/react'
import { AllBlocks, ExtractBlock } from '@/types/blocks'
import { useIntroductionAnimation } from './useIntroductionAnimation'

type Props = {
  data: ExtractBlock<AllBlocks, 'introduction'>
}

export const Introduction: React.FC<Props> = ({ data }) => {
  const sectionRef = useRef<HTMLElement>(null)
  const subTitleRef = useRef<HTMLDivElement>(null)
  const descriptionRef = useRef<HTMLDivElement>(null)

  useIntroductionAnimation(sectionRef, subTitleRef, descriptionRef)

  return (
    <section
      ref={sectionRef}
      className={clsx('introduction_block', {
        'introduction_block--background': data.background,
      })}
    >
      <div className="introduction_block__wrapper">
        <div className="introduction_block__wrapper__content">
          <h1 className="heading_1">{data.title}</h1>
          <h2 ref={subTitleRef} className="heading_2 with_bar_left">
            {data.subtitle}
          </h2>
          <div ref={descriptionRef}>
            <ConvertRichText data={data.description} />
          </div>
        </div>
        {data.image &&
          typeof data.image !== 'number' &&
          data.image.sizes?.content?.url &&
          data.image.sizes?.content?.width &&
          data.image.sizes?.content?.height && (
            <Image
              className="introduction_block__wrapper__picture"
              src={data.image.sizes.content.url}
              alt={data.image.alt}
              width={data.image.sizes.content.width}
              height={data.image.sizes.content.height}
              quality={100}
            />
          )}
      </div>
    </section>
  )
}
