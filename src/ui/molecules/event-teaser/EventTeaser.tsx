import './event-teaser.scss'

import clsx from 'clsx'
import { Event } from '@/payload-types'
import { Tag } from '@/ui/atoms/tag/Tag'
import { Link } from '@/ui/atoms/link/Link'

type Props = {
  variant?: 'default' | 'highlight'
  data: Event
} & React.HTMLAttributes<HTMLElement>

export const EventTeaser: React.FC<Props> = ({
  variant = 'default',
  data,
  className,
  ...props
}) => {
  return (
    <article
      className={clsx(
        'event_teaser',
        variant === 'default' ? 'event_teaser--teaser' : 'event_teaser--highlight',
        className,
      )}
      {...props}
    >
      <div className="event_teaser__header">
        <div className="event_teaser__header__top">
          <h3 className="heading_3">{data.title}</h3>
          <Tag
            label={data['on-site'] ? 'présentiel' : 'visio conférence'}
            variant="gray"
            size="small"
          />
        </div>
        <div className="event_teaser__header__bottom">
          <p>{formatDate(data.date)}</p>
          <p
            className={clsx(
              'event_teaser__header__bottom__status',
              generateStatusClass(data.status),
            )}
          >
            {data.status.toLowerCase()}
          </p>
        </div>
      </div>
      <div className="event_teaser__body">
        <div className="event_teaser__body__content">
          {variant === 'highlight' && (
            <div className="event_teaser__body__content__description">{data.description}</div>
          )}
          <ul className="event_teaser__body__content__categories">
            {data.categories?.map(
              (category) =>
                typeof category !== 'number' && (
                  <li key={category.id}>
                    <Tag label={category.title} />
                  </li>
                ),
            )}
          </ul>
        </div>
        {variant === 'highlight' && registrationIsOpen(data.status) && (
          <div className="event_teaser__body__footer">
            <Link href="#" variant="primary">
              S&apos;inscrire
            </Link>
            <p>
              Il reste
              <span className="event_teaser__body__footer__cta">4 places disponibles</span>
            </p>
          </div>
        )}
      </div>
    </article>
  )
}

const formatDate = (rawDate: string): string => {
  const date = new Date(rawDate)

  return new Intl.DateTimeFormat('fr-FR', {
    dateStyle: 'long',
  }).format(date)
}

const generateStatusClass = (status: string): string => {
  const classBase = 'event_teaser__header__bottom__status'

  switch (status) {
    case 'Programmé':
    case 'Confirmé':
      return `${classBase}--success`
    case 'Annulé':
      return `${classBase}--error`
    case 'Reporté':
      return `${classBase}--warning`
    default:
      return ''
  }
}

const registrationIsOpen = (status: string): boolean => {
  return ['Programmé', 'Confirmé'].includes(status)
}
