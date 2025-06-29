'use client'

import './workshop-charter.scss'

import { useRef } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { RichText as ConvertRichText } from '@payloadcms/richtext-lexical/react'
import { AllBlocks, ExtractBlock } from '@/types/blocks'
import { Link } from '@/ui/atoms/link/Link'
import { useWorkshopCharterAnimation } from './useWorkshopCharterAnimation'

type Props = {
  data: ExtractBlock<AllBlocks, 'workshop_charter'>
}

export const WorkshopCharter: React.FC<Props> = ({ data }) => {
  const sectionRef = useRef<HTMLElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  useWorkshopCharterAnimation(sectionRef, listRef)

  return (
    <section
      ref={sectionRef}
      className={clsx('workshop_block', { 'workshop_block--background': data.background })}
    >
      <div className="workshop_block__wrapper">
        <div className="workshop_block__wrapper__content">
          <h2 className="heading_1">{data.title}</h2>
          <p className="workshop_block__wrapper__content__subtitle">{data.subtitle}</p>
        </div>
        <div className="workshop_block__wrapper__body">
          <ul ref={listRef} className="workshop_block__wrapper__body__posts">
            {data.item?.map((item) => (
              <li key={item.id} className="workshop_block__wrapper__body__posts__item">
                <div className="workshop_block__wrapper__body__posts__item__background"></div>
                <div className="workshop_block__wrapper__body__posts__item__content">
                  <h3 className="heading_3">{item.title}</h3>
                  <ConvertRichText data={item.description} />
                </div>
              </li>
            ))}
          </ul>
          <div className="workshop_block__wrapper__body__wrapper">
            {data.image &&
              typeof data.image !== 'number' &&
              data.image.sizes?.content?.url &&
              data.image.sizes?.content?.width &&
              data.image.sizes?.content?.height && (
                <Image
                  className="workshop_block__wrapper__body__wrapper__picture"
                  src={data.image.sizes.content.url}
                  alt={data.image.alt}
                  width={data.image.sizes.content.width}
                  height={data.image.sizes.content.height}
                  quality={100}
                />
              )}
            <div className="workshop_block__wrapper__body__wrapper__cta">
              <Link href="/ateliers" variant="primary" internalLink>
                Participer à un atelier
              </Link>
              <Link href="/contact#collectif" variant="ghost" internalLink>
                Découvrir le collectif
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
