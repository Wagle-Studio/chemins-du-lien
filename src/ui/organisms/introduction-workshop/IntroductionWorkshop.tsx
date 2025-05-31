'use client'

import './introduction-workshop.scss'

import { useRef } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { RichText as ConvertRichText } from '@payloadcms/richtext-lexical/react'
import { Workshop } from '@/payload-types'
import { AllBlocks, ExtractBlock } from '@/types/blocks'
import { Link } from '@/ui/atoms/link/Link'
import { WorkshopListHighlight } from '@/ui/molecules/workshop-list-highlight/WorkshopListHighlight'
import { useIntroductionWorkshopAnimation } from './useIntroductionWorkshopAnimation'

type Props = {
  data: ExtractBlock<AllBlocks, 'introduction_workshop'>
  workshops: Workshop[]
}

export const IntroductionWorkshop: React.FC<Props> = ({ data, workshops }) => {
  const sectionRef = useRef<HTMLElement>(null)
  const descriptionRef = useRef<HTMLDivElement>(null)

  useIntroductionWorkshopAnimation(sectionRef, descriptionRef)

  return (
    <section
      ref={sectionRef}
      className={clsx('introduction_workshop_block', {
        'introduction_workshop_block--background': data.background,
      })}
    >
      <div className="introduction_workshop_block__wrapper">
        <div className="introduction_workshop_block__wrapper__information">
          {data.image &&
            typeof data.image !== 'number' &&
            data.image.sizes?.content?.url &&
            data.image.sizes?.content?.width &&
            data.image.sizes?.content?.height && (
              <Image
                className="introduction_workshop_block__wrapper__information__picture"
                src={data.image.sizes.content.url}
                alt={data.image.alt}
                width={data.image.sizes.content.width}
                height={data.image.sizes.content.height}
                quality={100}
              />
            )}
          <div className="introduction_workshop_block__wrapper__information__content">
            <h2 className="heading_1">{data.title}</h2>
            <div ref={descriptionRef}>
              <ConvertRichText data={data.description} />
            </div>
          </div>
        </div>
        {workshops.length > 0 && <WorkshopListHighlight data={workshops} />}
        <div className="introduction_workshop_block__wrapper__cta">
          <Link href="/decouvrir" variant="primary" internalLink>
            Découvrir les ateliers
          </Link>
          <Link href="/ateliers" variant="ghost" internalLink>
            Voir tous les ateliers
          </Link>
        </div>
      </div>
    </section>
  )
}
