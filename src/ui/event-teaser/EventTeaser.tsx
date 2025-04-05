import './style.scss'
import { Event } from '@/payload-types'
import clsx from 'clsx'
import { Category } from '@/ui/category/Category'
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

  return (
    <article className={clsx('event_teaser', className)} {...props}>
      <div className="event_teaser__header">
        <div className="event_teaser__header__top">
          <h3>{data.title}</h3>
          <p>{data['on-site'] ? 'présentiel' : 'visio conférence'}</p>
        </div>
        <div className="event_teaser__header__bottom">
          <p>{formatdDate(data.date)}</p>
          <p>{data.status.toLowerCase()}</p>
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
                    <Category category={category} />
                  </li>
                ),
            )}
          </ul>
        </div>
        {variant === 'highlight' && (
          <div className="event_teaser__body__footer">
            <Link href="#" variant="primary">
              S'inscrire
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
