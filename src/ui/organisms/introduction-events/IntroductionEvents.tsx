'use client'

// TODO : extract events list for reusability.

import './introduction-events.scss'

import { useRef } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { RichText as ConvertRichText } from '@payloadcms/richtext-lexical/react'
import { Event } from '@/payload-types'
import { AllBlocks, ExtractBlock } from '@/types/blocks'
import { Link } from '@/ui/atoms/link/Link'
import { EventTeaser } from '@/ui/molecules/event-teaser/EventTeaser'
import { useIntroductionEventsAnimation } from './useIntroductionEventsAnimation'

type Props = {
  data: ExtractBlock<AllBlocks, 'introduction_events'>
  events: Event[]
}

export const IntroductionEvents: React.FC<Props> = ({ data, events }) => {
  const sectionRef = useRef<HTMLElement>(null)
  const descriptionRef = useRef<HTMLDivElement>(null)
  const eventsListRef = useRef<HTMLUListElement>(null)

  useIntroductionEventsAnimation(sectionRef, descriptionRef, eventsListRef)

  return (
    <section
      ref={sectionRef}
      className={clsx('introduction_events_block', {
        'introduction_events_block--background': data.background,
      })}
    >
      <div className="introduction_events_block__wrapper">
        <div className="introduction_events_block__wrapper__information">
          {data.image &&
            typeof data.image !== 'number' &&
            data.image.sizes?.content?.url &&
            data.image.sizes?.content?.width &&
            data.image.sizes?.content?.height && (
              <Image
                className="introduction_events_block__wrapper__information__picture"
                src={data.image.sizes.content.url}
                alt={data.image.alt}
                width={data.image.sizes.content.width}
                height={data.image.sizes.content.height}
                quality={100}
              />
            )}
          <div className="introduction_events_block__wrapper__information__content">
            <h2 className="heading_1">{data.title}</h2>
            <div ref={descriptionRef}>
              <ConvertRichText data={data.description} />
            </div>
          </div>
        </div>
        {events.length > 0 && (
          <div className="introduction_events_block__wrapper__events">
            <ul ref={eventsListRef} className="introduction_events_block__wrapper__events__list">
              {events.map((event, index) => (
                <li key={event.id} className="events_block__list__item">
                  <EventTeaser data={event} variant={index === 0 ? 'highlight' : 'default'} />
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="introduction_events_block__wrapper__cta">
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
