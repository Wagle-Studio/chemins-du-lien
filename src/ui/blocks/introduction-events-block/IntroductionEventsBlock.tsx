import './style.scss'
import clsx from 'clsx'
import Image from 'next/image'
import { Event } from '@/payload-types'
import { RichText as ConvertRichText } from '@payloadcms/richtext-lexical/react'
import { AllBlocks, ExtractBlock } from '@/types/blocks'
import { EventTeaser } from '@/ui/event-teaser/EventTeaser'
import { Link } from '@/ui/link/Link'

type Props = {
  data: ExtractBlock<AllBlocks, 'introduction_events'>
  events: Event[]
}

export const IntroductionEventsBlock: React.FC<Props> = ({ data, events }) => {
  return (
    <div
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
                src={data.image.sizes?.content?.url}
                alt={data.image.alt}
                width={data.image.sizes.content.width}
                height={data.image.sizes.content.height}
                quality={100}
              />
            )}
          <div className="introduction_events_block__wrapper__information__content">
            <h1 className="heading_1">{data.title}</h1>
            <ConvertRichText data={data.description} />
          </div>
        </div>
        <div className="introduction_events_block__wrapper__events">
          <ul className="introduction_events_block__wrapper__events__list">
            {events.map((event, index) => (
              <li key={event.id} className={clsx('events_block__list__item')}>
                <EventTeaser data={event} variant={index === 0 ? 'highlight' : 'default'} />
              </li>
            ))}
          </ul>
        </div>
        <div className="introduction_events_block__wrapper__cta">
          <Link href="/" variant="primary">
            Découvrir les ateliers
          </Link>
          <Link href="/" variant="ghost">
            Voir tous les ateliers
          </Link>
        </div>
      </div>
    </div>
  )
}
