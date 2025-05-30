'use client'

import './introduction-faq.scss'
import { useRef } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { RichText as ConvertRichText } from '@payloadcms/richtext-lexical/react'
import { AllBlocks, ExtractBlock } from '@/types/blocks'
import { Link } from '@/ui/atoms/link/Link'
import { useIntroductionFaqAnimation } from './useIntroductionFaqAnimation'

type Props = {
  data: ExtractBlock<AllBlocks, 'introduction_faq'>
}

export const IntroductionFaq: React.FC<Props> = ({ data }) => {
  const sectionRef = useRef<HTMLElement>(null)
  const subtitleRef = useRef<HTMLHeadingElement>(null)

  useIntroductionFaqAnimation(subtitleRef, sectionRef)

  return (
    <section
      ref={sectionRef}
      className={clsx('introduction_faq', { 'introduction_faq--background': data.background })}
    >
      <div className="introduction_faq__wrapper">
        <div className="introduction_faq__wrapper__content">
          <h1 className="heading_1">{data.title}</h1>
          <h2 ref={subtitleRef} className="heading_2 with_bar_left">
            {data.subtitle}
          </h2>
          <div>
            <ConvertRichText data={data.description} />
          </div>
          <Link href="/a-propos#faq" variant="primary" internalLink>
            Consulter
          </Link>
        </div>
        {data.image &&
          typeof data.image !== 'number' &&
          data.image.sizes?.content?.url &&
          data.image.sizes?.content?.width &&
          data.image.sizes?.content?.height && (
            <Image
              className="introduction_faq__wrapper__picture"
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
