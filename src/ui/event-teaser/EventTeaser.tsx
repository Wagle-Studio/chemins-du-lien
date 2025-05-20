import './style.scss'
import { Event } from '@/payload-types'
import clsx from 'clsx'
import { Tag } from '@/ui/tag/Tag'
import { Link } from '@/ui/link/Link'

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
  const formatdDate = (rawDate: string) => {
    const date = new Date(rawDate)

    return new Intl.DateTimeFormat('fr-FR', {
      dateStyle: 'long',
    }).format(date)
  }

  const generateStatusClass = (status: string) => {
    const classBase = 'event_teaser__header__bottom__status'

    switch (status) {
      case 'Programmé':
        return `${classBase}--success`
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

  const registrationIsOpen = (status: string) => {
    switch (status) {
      case 'Programmé':
        return true
      case 'Confirmé':
        return true
      case 'Annulé':
        return false
      case 'Reporté':
        return false
      default:
        return false
    }
  }

  return (
    <article className={clsx('event_teaser', className)} {...props}>
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
          <p>{formatdDate(data.date)}</p>
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
