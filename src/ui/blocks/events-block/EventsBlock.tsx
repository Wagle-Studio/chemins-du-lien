import './style.scss'
import { Event } from '@/payload-types'
import clsx from 'clsx'
import { EventTeaser } from '@/ui/event-teaser/EventTeaser'
import { Link } from '@/ui/link/Link'

type Props = {
  data: Event[]
}

export const EventsBlock: React.FC<Props> = ({ data }) => {
  return (
    <div className="events_block">
      <h2 className="events_block__title">Événements à venir</h2>
      <ul className="events_block__list">
        {data.map((event, index) => (
          <li
            key={event.id}
            className={clsx(
              'events_block__list__item',
              index === 0
                ? 'events_block__list__item--highlight'
                : 'events_block__list__item--teaser',
            )}
          >
            <EventTeaser data={event} variant={index === 0 ? 'highlight' : 'default'} />
          </li>
        ))}
      </ul>
      <Link href="/evenements" variant="primary">
        Voir tous les événements
      </Link>
    </div>
  )
}
